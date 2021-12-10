import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';

@Injectable()
export class CompraService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateCompraDto) {
    //Validação para ver se o assento esta disponivel
    const assento = await this.db.assento.findFirst({
      where: {
        id:data.assentos
      }
    });

    if (assento) {
      throw new BadRequestException('O assento ja esta ocupado');
    }

    //Validação para ver se o voo ja esta lotado
    const totalAssentos = await this.db.voos.findFirst({
      where: {
        id: data.vooId,
      },
      select: {
        quantidadeAssentos: true,
        _count: {
          select: {
            assentos: true,
          },
        },
      },
    });

    const { quantidadeAssentos, _count } = totalAssentos;

    if (quantidadeAssentos == _count.assentos) {
      throw new BadRequestException('O voo ja esta com a lotação maxima');
    }

    if (quantidadeAssentos < data.assentos || data.assentos < 1) {
      throw new BadRequestException('Assento não existe');
    }

    //valida a compra se as opções anterires forem negativas
    await this.db.assento.create({
      data: {
        id: data.assentos,
        nome: data.nome,
        vooId: data.vooId,
      },
    });

    return this.db.compra.create({ data });
  }

  async findAll() {
    return this.db.compra.findMany();
  }

  async findOne(id: number) {
    const compra = await this.db.compra.findUnique({
      where: {
        id: id,
      },
    });

    if (!compra) {
      throw new BadRequestException('compra não existe');
    }

    return compra;
  }

  async update(id: number, data: UpdateCompraDto) {
    const compra = await this.db.compra.findUnique({
      where: {
        id: id,
      },
    });

    if (!compra) {
      throw new BadRequestException('compra não existe');
    }

    const novaCompra = this.db.compra.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
  }

  async remove(id: number) {
    const compra = await this.db.compra.findUnique({
      where: {
        id: id,
      },
    });

    if (!compra) {
      throw new BadRequestException('compra não existe');
    }

    await this.db.compra.delete({
      where: {
        id: id
      }
    })

    const assento = await this.db.assento.findFirst({
      where: {
        id: compra.assentos
      }
    })

    if (!assento) {
      throw new BadRequestException('assento não existe');
    }

    const novaVaga = await this.db.assento.delete({
      where: {
        id: compra.assentos
      }
    })



    return novaVaga;
  }
}
