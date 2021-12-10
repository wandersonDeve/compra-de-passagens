import { Prisma } from "@prisma/client";

export class Compra implements Prisma.CompraUncheckedCreateInput{
    id?: number;
    nome: string;
    vooId: number;
    assentos: number;
    horaCompra?: string | Date;
}
