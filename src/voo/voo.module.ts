import { Module } from '@nestjs/common';
import { VooService } from './voo.service';
import { VooController } from './voo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VooController],
  providers: [VooService,PrismaService]
})
export class VooModule {}
