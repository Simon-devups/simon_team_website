import { IsString , IsNotEmpty, ValidateNested, IsArray, IsEnum, IsOptional } from "class-validator"
import { Exclude, Expose, Type } from "class-transformer"
import { PortfolioStatus } from "@prisma/client"


class Image {
    @IsString()
    @IsNotEmpty()
    url!:string
}

export class PortfoliosResponseDto {
    id!:number
    title!:string

    @Exclude()
    client_name!:string
    @Expose({name:"clientName"})
    clientName(){
        return this.client_name
    }
    
    @Exclude()
    project_url!:string
    @Expose({name:"projectUrl"})
    projectUrl(){
        return this.project_url
    }

    @Exclude()
    short_description!:string
    @Expose({name:"shortDescription"})
    shortDescription(){return this.short_description}

    description!:string

    @Exclude()
    view_count!:number
    @Expose({name:'viewCount'})
    viewCount(){return this.view_count}

    gallery!:string
    technologies!:string;

    @Exclude()
    project_duration!:string;
    @Expose({name:'projectDuration'})
    projectDuration(){return this.project_duration}

    @Exclude()
    project_date!:Date;
    status!:PortfolioStatus;

    @Exclude()
    created_at!:Date;

    @Exclude()
    updated_at!:Date;

    constructor(partial:Partial<PortfoliosResponseDto>){
        Object.assign(this,partial);
    }
}

export class CreatePortfolioDto {
    @IsString()
    @IsNotEmpty()
    title!:string;

    @IsString()
    @IsNotEmpty()
    clientName!:string;

    @IsString()
    @IsNotEmpty()
    projectUrl!:string;

    @IsString()
    @IsNotEmpty()
    shortDescription!:string;

    @IsString()
    @IsNotEmpty()
    description!:string;

    @IsArray()
    @ValidateNested({ each:true })
    @Type(() => Image)
    images!:Image[];

    @IsString()
    @IsNotEmpty()
    technologies!:string;
    
    @IsString()
    @IsNotEmpty()
    projectDuration!:string;

    projectDate!:Date;

    @IsEnum(PortfolioStatus)
    status!:PortfolioStatus;
}

export class UpdatePortfolioDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?:string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    clientName?:string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    projectUrl?:string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?:string

    @IsOptional()
    @IsArray()
    @ValidateNested({ each:true })
    @Type(() => Image)
    images?:Image[]

    @IsOptional()
    @IsEnum(PortfolioStatus)
    status?:PortfolioStatus
}