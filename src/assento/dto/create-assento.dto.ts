import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Assento } from "../entities/assento.entity";

export class CreateAssentoDto extends Assento
{
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    vooId: number;
}
