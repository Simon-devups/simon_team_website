import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from 'generated/prisma';

// PROGRAM: sets a global filter for nest and prisma exceptions

/**
    *a static Exception form
 */
interface ErrorResponseBody {
  success: false;
  statusCode: number;
  errorCode: string;
  message: string | string[];
  path: string;
  method: string;
  timestamp: string;
  requestId?: string;
  stack?: string; // deleted in production level
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  private readonly isProd = process.env.NODE_ENV === 'production';

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { statusCode, errorCode, message } = this.resolveException(exception);

    const body: ErrorResponseBody = {
      success: false,
      statusCode,
      errorCode,
      message,
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
      requestId: (request.headers['x-request-id'] as string) ?? undefined,
    };

    if (!this.isProd && exception instanceof Error) {
      body.stack = exception.stack;
    }

    this.logException(exception, body);

    response.status(statusCode).json(body);
  }

  /**
   * detect error type and extract statusCode / errorCode / message. 
   * check first nestjs error , second prisma errors and finally fallback.
   */
  private resolveException(exception: unknown): {
    statusCode: number;
    errorCode: string;
    message: string | string[];
  } {
    // 1) standard nestjs exceptions
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const res = exception.getResponse();

      // validation pipe
      const message = 
        typeof res === 'string' ? res : ((res as any)?.message ?? exception.message);

      return {
        statusCode: status,
        errorCode: this.mapStatusToErrorCode(status),
        message,
      };
    }

    // 2) standard prisma exceptions
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      return this.resolvePrismaKnownError(exception);
    }

    // 3) prisma validation errors
    if (exception instanceof Prisma.PrismaClientValidationError) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: 'DATABASE_VALIDATION_ERROR',
        message: 'ساختار درخواست ارسالی به دیتابیس نامعتبر است',
      };
    }

    // 4) database connection error
    if (exception instanceof Prisma.PrismaClientInitializationError) {
      return {
        statusCode: HttpStatus.SERVICE_UNAVAILABLE,
        errorCode: 'DATABASE_CONNECTION_ERROR',
        message: 'اتصال به دیتابیس برقرار نشد',
      };
    }

    // 5) when prisma engine crashed
    if (exception instanceof Prisma.PrismaClientRustPanicError) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errorCode: 'DATABASE_ENGINE_CRASH',
        message: 'خطای داخلی در موتور دیتابیس رخ داده است',
      };
    }

    // 6) other excpetions
    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      errorCode: 'INTERNAL_SERVER_ERROR',
      message: 'خطای داخلی سرور رخ داده است',
    };
  }

  private mapStatusToErrorCode(status: number): string {
    const map: Record<number, string> = {
      [HttpStatus.BAD_REQUEST]: 'BAD_REQUEST',
      [HttpStatus.UNAUTHORIZED]: 'UNAUTHORIZED',
      [HttpStatus.FORBIDDEN]: 'FORBIDDEN',
      [HttpStatus.NOT_FOUND]: 'NOT_FOUND',
      [HttpStatus.CONFLICT]: 'CONFLICT',
      [HttpStatus.UNPROCESSABLE_ENTITY]: 'VALIDATION_ERROR',
      [HttpStatus.TOO_MANY_REQUESTS]: 'TOO_MANY_REQUESTS',
    };
    return map[status] ?? 'HTTP_ERROR';
  }

  /**
   * list of prisma codes:
   * https://www.prisma.io/docs/orm/reference/error-reference
   * if needs other code export in this private function.
   */
  private resolvePrismaKnownError(
    exception: Prisma.PrismaClientKnownRequestError,
  ): { statusCode: number; errorCode: string; message: string | string[] } {
    const target = (exception.meta?.target as string[] | string | undefined) ?? undefined;
    const targetFields = Array.isArray(target) ? target.join(', ') : target;

    switch (exception.code) {
      // نقض محدودیت یکتایی (unique constraint) — مثلاً ایمیل تکراری
      case 'P2002':
        return {
          statusCode: HttpStatus.CONFLICT,
          errorCode: 'UNIQUE_CONSTRAINT_VIOLATION',
          message: targetFields
            ? `مقدار وارد شده برای «${targetFields}» تکراری است`
            : 'این مقدار قبلاً ثبت شده است',
        };

      // رکورد مورد نظر برای update/delete/findUniqueOrThrow پیدا نشد
      case 'P2025':
        return {
          statusCode: HttpStatus.NOT_FOUND,
          errorCode: 'RECORD_NOT_FOUND',
          message: (exception.meta?.cause as string) ?? 'رکورد مورد نظر یافت نشد',
        };

      // نقض کلید خارجی (foreign key) — مثلاً ارجاع به یک id ناموجود
      case 'P2003':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          errorCode: 'FOREIGN_KEY_CONSTRAINT_VIOLATION',
          message: targetFields
            ? `مقدار «${targetFields}» به رکورد معتبری اشاره نمی‌کند`
            : 'ارتباط با رکورد وابسته برقرار نیست',
        };

      // نقض محدودیت not-null
      case 'P2011':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          errorCode: 'NULL_CONSTRAINT_VIOLATION',
          message: targetFields
            ? `مقدار «${targetFields}» نمی‌تواند خالی باشد`
            : 'یکی از فیلدهای اجباری خالی است',
        };

      // مقدار ورودی طول بیشتر از حد مجاز ستون دارد
      case 'P2000':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          errorCode: 'VALUE_TOO_LONG',
          message: 'مقدار ارسالی طولانی‌تر از حد مجاز است',
        };

      // نوع داده‌ی ارسالی با نوع ستون همخوانی ندارد
      case 'P2006':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          errorCode: 'INVALID_FIELD_VALUE',
          message: 'مقدار ارسالی برای این فیلد معتبر نیست',
        };

      // خطای مربوط به تعداد رکوردهای موردنیاز برای عملیات nested (connect و ...)
      case 'P2014':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          errorCode: 'RELATION_VIOLATION',
          message: 'این تغییر باعث نقض یک رابطه‌ی الزامی بین رکوردها می‌شود',
        };

      // timeout در تراکنش
      case 'P2028':
        return {
          statusCode: HttpStatus.REQUEST_TIMEOUT,
          errorCode: 'TRANSACTION_TIMEOUT',
          message: 'زمان انجام تراکنش دیتابیس به پایان رسید',
        };

      // هر کد دیگری که به‌صورت خاص مپ نشده
      default:
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          errorCode: `DATABASE_ERROR_${exception.code}`,
          message: 'خطایی در ارتباط با دیتابیس رخ داده است',
        };
    }
  }

  private logException(exception: unknown, body: ErrorResponseBody): void {
    const logMessage = `[${body.method}] ${body.path} -> ${body.statusCode} | ${JSON.stringify(
      body.message,
    )}`;
    
    if (body.statusCode >= 500) {
      this.logger.error(
        logMessage,
        exception instanceof Error ? exception.stack : String(exception),
      );
    } else {
      this.logger.warn(logMessage);
    }
  }
}