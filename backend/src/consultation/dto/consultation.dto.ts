import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';


export class RequestResponseDto{
    id!:number;
    message!:string;
    userName!:string;
    userPhone!:string;

    @Exclude()
    user_id!:number;
    @Expose({name:'userId'})
    userId(){
        return this.user_id
    }

    constructor(partial:Partial<RequestResponseDto>){
        Object.assign(this,partial)
    }
}

export class CreateRequestDto{
    @IsString()
    @IsNotEmpty()
    message!:string
}