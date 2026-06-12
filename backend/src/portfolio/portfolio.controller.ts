import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto, PortfoliosResponseDto, UpdatePortfolioDto } from './dto/portfolio.dtos';
import { Role } from 'src/decorators/roles.decorator';
import { UserType } from 'generated/prisma';
import { User } from 'src/auth/decorators/user.decorator';
import type {UserInfo} from 'src/auth/decorators/user.decorator';



@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService:PortfolioService){}

    @Get()
    getPortfolios():Promise<PortfoliosResponseDto[]>{
        return this.portfolioService.getPortfolios()
    }

    @Get(':id')
    getSpecifiedPortfolio(
        @Param('id',ParseIntPipe) id:number,
    ){
        return this.portfolioService.getSpecifiedPortfolio(id)
    }

    @Role(UserType.ADMIN)
    @Post()
    createPortfolio(
        @Body() body:CreatePortfolioDto,
        @User() user:UserInfo
    ){
        return this.portfolioService.createPortfolio(body)
    }

    @Role(UserType.ADMIN)
    @Put('/:id')
    updatePortfolio(
        @Param('id',ParseIntPipe) id:number,
        @Body() body:UpdatePortfolioDto,
        @User() user:UserInfo
    ){
        return this.portfolioService.updatePortfolio(id,body)
    }

    @Role(UserType.ADMIN)
    @Delete('/:id')
    deletePortfolio(
        @Param('id',ParseIntPipe) id:number,
        @User() user:UserInfo
    ){
        return this.portfolioService.deletePortfolio(id)
    }
}
