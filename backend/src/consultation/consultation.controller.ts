import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { User } from 'src/auth/decorators/user.decorator';
import type { UserInfo } from 'src/auth/decorators/user.decorator';
import { CreateRequestDto, RequestResponseDto } from './dto/consultation.dto';
import { Role } from 'src/decorators/roles.decorator';
import { UserType } from 'generated/prisma';


@Controller('consultation-request')
export class ConsultationController {
    constructor(private readonly consultationService: ConsultationService) { }

    @Post()
    createRequest(
        @Body() message: CreateRequestDto,
        @User() user: UserInfo
    ) {
        return this.consultationService.createRequest(user.id, message)
    }

    @Get()
    @Role(UserType.ADMIN)
    getAllRequests(): Promise<RequestResponseDto[]> {
        return this.consultationService.getAllRequests()
    }

    @Get(':id')
    @Role(UserType.ADMIN)
    getSpecifiedRequest(
        @Param('id', ParseIntPipe) id: number
    ): Promise<RequestResponseDto> {
        return this.consultationService.getSpecifiedRequest(id)
    }

    @Delete(':id')
    @Role(UserType.ADMIN)
    deleteSpecifiedRequest(@Param('id', ParseIntPipe) id: number) {
        return this.consultationService.deleteSpecifiedRequest(id)
    }
}
