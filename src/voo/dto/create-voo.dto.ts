import { IsCurrency, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Voo } from "../entities/voo.entity";

export class CreateVooDto extends Voo
{
    @IsNotEmpty()
    @IsString()
    saida: string;

    @IsNotEmpty()
    @IsString()
    chegada: string;

    @IsNotEmpty()
    @IsString()
    aeroportoOrigen: string;

    @IsNotEmpty()
    @IsString()
    aeroportoDestino: string;

    @IsNotEmpty()
    @IsNumber()
    quantidadeAssentos: number;

    @IsNotEmpty()
    preco: number;

    @IsNotEmpty()
    @IsNumber()
    companhiaId: number;


}
