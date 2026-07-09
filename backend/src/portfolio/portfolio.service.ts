import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PortfoliosResponseDto } from './dto/portfolio.dtos';
import { PortfolioStatus } from '@prisma/client';

interface CreatePortfolioBody {
    title: string;
    clientName: string;
    projectUrl: string;
    shortDescription: string;
    description: string;
    images: { url: string }[];
    technologies: string;
    projectDuration: string;
    projectDate: Date;
    status: PortfolioStatus;
}

interface UpdatePortfolioParams {
    title?:string
    clientName?:string
    projectUrl?:string
    description?:string
    images?:{url:string}[]
    status?:PortfolioStatus
}

@Injectable()
export class PortfolioService {
    constructor(private readonly prismaService: PrismaService) { }

    async getPortfolios(page:number): Promise<PortfoliosResponseDto[]> {
        const portfolios = await this.prismaService.portfolio.findMany({
            select: {
                id: true,
                title: true,
                client_name: true,
                project_url: true,
                short_description: true,
                view_count: true,
                technologies: true,
                status: true,
                images: {
                    select: { url: true },
                    take: 1
                }
            },
            skip:(page-1)*15,
            take:15
        });

        if (!portfolios) throw new NotFoundException;

        return portfolios.map((porfolio) => {
            const { images, ...portfolioWithoutImage } = porfolio;
            const fetchPortfolio = { ...portfolioWithoutImage, image: images[0].url }

            return new PortfoliosResponseDto(fetchPortfolio)
        })
    }


    async getSpecifiedPortfolio(id: number) {
        const portfolio = await this.prismaService.portfolio.findUnique({
            where: { id },
        });

        if (!portfolio) throw new NotFoundException;

        const updatedPortfolio = await this.prismaService.portfolio.update({
            where:{id},
            data:{view_count:portfolio?.view_count+1},
            include: {
                images: true
            }
        })

        return new PortfoliosResponseDto(updatedPortfolio)
    }

    async createPortfolio({ 
        title, clientName, projectUrl, shortDescription, description, images, technologies, projectDate, projectDuration, status
    }: CreatePortfolioBody) {
        const portfolio = await this.prismaService.portfolio.create({
            data:{
                title,
                client_name:clientName,
                project_url:projectUrl,
                short_description:shortDescription,
                description,
                technologies,
                project_duration:projectDuration,
                project_date:projectDate,
                status:status
            }
        })

        const portfolioImages = images.map((image)=>{
            return {...image,portfolioId:portfolio.id}
        })

        const image = await this.prismaService.gallery.createMany({
            data:portfolioImages
        })

        return new PortfoliosResponseDto(portfolio)
    }

    // update portfolio
    async updatePortfolio(id:number,{title,description,clientName,projectUrl,images,status}
        :UpdatePortfolioParams) {
            if(images?.length){
                const portfolioImages = images.map((image)=>{
                    return {...image,portfolioId:id}
                })
                const deleteImages = await this.prismaService.gallery.deleteMany({
                    where:{id}
                })
                const createImages = await this.prismaService.gallery.createMany({
                    data:portfolioImages
                })
            }
            
            const update = await this.prismaService.portfolio.update({
                where:{id},
                data:{title,
                    description,
                    client_name:clientName,
                    project_url:projectUrl,
                    status
                }
            })
        }

    async deletePortfolio(id:number) {
        const images = await this.prismaService.gallery.deleteMany({
            where:{portfolioId:id}
        })
        const portfolio = await this.prismaService.portfolio.delete({
            where:{id}
        })
    }
}
