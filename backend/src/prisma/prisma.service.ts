import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '../../generated/prisma/index.js';
import { PrismaClient } from '@prisma/client';
// const { PrismaClient } = pkg;
import { OnModuleDestroy,OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy,OnModuleInit {
    async onModuleInit() {
        await this.$connect;
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
