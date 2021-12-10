import { Module } from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CompanhiasController } from './companhias.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompanhiasController],
  providers: [CompanhiasService,PrismaService]
})
export class CompanhiasModule {}
