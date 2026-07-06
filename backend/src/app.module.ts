import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { UserInterceptor } from './auth/interceptor/user.interceptor';
import { ConsultationModule } from './consultation/consultation.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { UserThrottlerGuard } from './guards/throttler.guard';

@Module({
  imports: [PrismaModule, PortfolioModule, AuthModule, ConsultationModule,
    ThrottlerModule.forRoot([
      { ttl: 60000,   // time period (ms)
        limit: 10,    // 10 request per ttl ,
    }]),
    // ThrottlerModule.forRootAsync({
    //   useFactory: () => ({
    //     throttlers: [{ ttl: 60000, limit: 10 }],
    //     storage: new ThrottlerStorageRedisService('redis://localhost:6379'),
    //   }),
    // })
  ],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_INTERCEPTOR,
    useClass:UserInterceptor
  },{
    provide:APP_GUARD,
    useClass:AuthGuard
  },{
    provide:APP_GUARD,
    useClass:UserThrottlerGuard
  }],
})
export class AppModule {}
