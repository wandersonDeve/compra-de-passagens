import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompraController],
  providers: [CompraService,PrismaService]
})
export class CompraModule {}
