import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exception.filter';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  app.useGlobalFilters(new AllExceptionsFilter());

  app.use(helmet());
  app.use(compression());
  // app.set('trust proxy', 1);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
