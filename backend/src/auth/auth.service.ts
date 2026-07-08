import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserType } from '@prisma/client';

const saltRound = 10;

interface LoginParams{
    email:string;
    password:string;
}

interface RegisterParams {
    name:string;
    phone:string;
    email:string;
    password:string;
    inviteKey?:string;
}

@Injectable()
export class AuthService {
    constructor(private readonly prismaService:PrismaService){}

    async login({email,password}:LoginParams){
        if(email===process.env.ADMIN_EMAIL) {
            if(password!=process.env.ADMIN_PASSWORD) throw new ConflictException;
            const token = this.generateJWT(1,process.env.ADMIN_NAME!)
            return { access_token: token }
        }
        const user = await this.prismaService.user.findUnique({
            where:{email}
        });

        if (!user) throw new HttpException('first register.',400);
        
        
        const isValidPassword = await bcrypt.compare(password,user.password);
        
        if(!isValidPassword) throw new HttpException('Password is not correct',400) ;

        const token = this.generateJWT(user.id,user.name)
        return { access_token: token }
    }

    async register({name,phone,email,password,inviteKey}:RegisterParams){
        const checkUser = await this.prismaService.user.findUnique({
            where:{email}
        })
        
        if (checkUser) throw new HttpException('user allready exist.',400);

        const hashedPassword = await bcrypt.hash(password,saltRound)

        if(inviteKey === process.env.INVITE_KEY) {
            const user = await this.prismaService.user.create({
                data:{
                    name,
                    email,
                    phone,
                    password:hashedPassword,
                    user_type: UserType.ADMIN
                }
            })
            const token = this.generateJWT(user.id,user.name)
            return { access_token: token }
        }else{
            const user = await this.prismaService.user.create({
                data:{
                    name,
                    email,
                    phone,
                    password:hashedPassword
                }
            })
            const token = this.generateJWT(user.id,user.name)
            return { access_token: token }
        }
    }

    private generateJWT(id:number,name:string){
        return jwt.sign({
            id,
            name
        },process.env.JSON_TOKEN_KEY!,{
            expiresIn: 60 * 60 * 1000
        })
    }
}
