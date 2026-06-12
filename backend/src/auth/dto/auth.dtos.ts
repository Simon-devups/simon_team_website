import { Equals, IsEmail, IsNotEmpty, IsString } from "class-validator";




export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email!:string;

    @IsString()
    @IsNotEmpty()
    password!:string;
}

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    name!:string;
    
    @IsNotEmpty()
    phone!:string;

    @IsEmail()
    @IsNotEmpty()
    email!:string;

    @IsString()
    @IsNotEmpty()
    password!:string;

    @IsString()
    @IsNotEmpty()
    @Equals("simon_team_webservice_AminTokenKey!")
    inviteKey?:string
}