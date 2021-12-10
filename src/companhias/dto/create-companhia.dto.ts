import { IsNotEmpty, IsString } from "class-validator";
import { Companhia } from "../entities/companhia.entity"

export class CreateCompanhiaDto extends Companhia{
    @IsNotEmpty()
    @IsString()
    nome: string;
}
