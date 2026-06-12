import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioService } from './portfolio.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MockPropertyContext } from 'node:test';

const mockGetPortfolios = []

describe('PortfolioService', () => {
  let service: PortfolioService;
  let prismaService:PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioService,{
        provide:PrismaService,
        useValue:{
          portfolio:{
            findMany: jest.fn().mockReturnValue(mockGetPortfolios)
          }
        }
      }],
    }).compile();

    service = module.get<PortfolioService>(PortfolioService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getPortfolios',()=>{
    it("should call prisma portfolio.findMany",async()=>{
      const mockPrismaFindManyPortfolios = jest.fn().mockReturnValue(mockGetPortfolios)

      jest.spyOn(prismaService.portfolio,"findMany").mockImplementation(mockPrismaFindManyPortfolios)

      await service.getPortfolios()

      // expect(mockPrismaFindManyPortfolios).toHaveBeenCalledWith()
    })
  })
});
