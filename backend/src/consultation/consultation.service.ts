import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestResponseDto } from './dto/consultation.dto';
import { asyncWrapProviders } from 'async_hooks';

@Injectable()
export class ConsultationService {
    constructor(private readonly prismaService:PrismaService){}

    createRequest(id:number,{message}:CreateRequestParams){
        return this.prismaService.consultation.create({
            data:{
                message,
                user_id:id
            }
        })
    }

    async getAllRequests():Promise<RequestResponseDto[]>{
        const requests = await this.prismaService.consultation.findMany({
            include:{
                user:{
                    select:{
                        name:true,
                        phone:true
                    }
                }
            }
        })

        if(!requests) throw new NotFoundException;

        return requests.map((request)=>{
            const {user,...requestWithoutUser} = request;
            const fetchRequest = {...requestWithoutUser,userName:user.name,userPhone:user.phone}
            return new RequestResponseDto(fetchRequest)
        })
    }

    async getSpecifiedRequest(id:number):Promise<RequestResponseDto>{
        const request = await this.prismaService.consultation.findUnique({
            where:{id},
            include:{
                user:{
                    select:{
                        name:true,
                        phone:true
                    }
                }
            }
        })

        if(!request) throw new NotFoundException;
        const {user,...requestWithoutUser} = request;
        const fetchRequest = {...requestWithoutUser,userName:user.name,userPhone:user.phone}

        return new RequestResponseDto(fetchRequest)
    }

    deleteSpecifiedRequest(id:number){
        return this.prismaService.consultation.delete({
            where:{id}
        })
    }
}


interface CreateRequestParams{
    message:string
}