import { Prisma } from "@prisma/client";

export class Voo implements Prisma.VoosUncheckedCreateInput
{
    id?: number;
    saida: string;
    chegada: string;
    aeroportoOrigen: string;
    aeroportoDestino: string;
    quantidadeAssentos: number;
    preco: number;
    companhiaId: number;
    assentos?: Prisma.AssentoUncheckedCreateNestedManyWithoutVooInput;
    compra?: Prisma.CompraUncheckedCreateNestedManyWithoutVooInput;
    
}
