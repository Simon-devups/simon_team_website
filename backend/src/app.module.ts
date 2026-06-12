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

@Module({
  imports: [PrismaModule, PortfolioModule, AuthModule, ConsultationModule],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_INTERCEPTOR,
    useClass:UserInterceptor
  },{
    provide:APP_GUARD,
    useClass:AuthGuard
  }],
})
export class AppModule {}
