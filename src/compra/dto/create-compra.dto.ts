import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Compra } from '../entities/compra.entity';

export class CreateCompraDto extends Compra {
  @IsNotEmpty()
  @IsString()
  nome: string;
    
  @IsNotEmpty()
  @IsNumber()
  vooId: number;
    
  @IsNotEmpty()
  @IsNumber()
  assentos: number;

  @IsNotEmpty()
  horaCompra?: string | Date;
    
}
