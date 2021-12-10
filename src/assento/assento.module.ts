import { Module } from '@nestjs/common';
import { AssentoService } from './assento.service';
import { AssentoController } from './assento.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AssentoController],
  providers: [AssentoService,PrismaService]
})
export class AssentoModule {}
