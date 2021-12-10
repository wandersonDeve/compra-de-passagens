import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanhiasModule } from './companhias/companhias.module';
import { VooModule } from './voo/voo.module';
import { AssentoModule } from './assento/assento.module';
import { CompraModule } from './compra/compra.module';

@Module({
  imports: [CompanhiasModule, VooModule, AssentoModule, CompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
