import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports:[PrismaModule],
  controllers: [PortfolioController],
  providers: [PortfolioService,{
    provide:APP_INTERCEPTOR,
    useClass:ClassSerializerInterceptor
  }]
})
export class PortfolioModule {}
