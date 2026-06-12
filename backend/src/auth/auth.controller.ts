import { Body, Controller, Param, ParseEnumPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dtos';
import { UserType } from 'generated/prisma';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() body:LoginDto){
        return this.authService.login(body)
    }

    @Post('register')
    register(@Body() body : RegisterDto,
){
        return this.authService.register(body)
    }

    @Post('forgot-password')
    resetPassword(){}
}
