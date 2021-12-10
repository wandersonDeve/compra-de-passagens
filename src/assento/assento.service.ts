import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAssentoDto } from './dto/create-assento.dto';
import { UpdateAssentoDto } from './dto/update-assento.dto';

@Injectable()
export class AssentoService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateAssentoDto) {
    const assento = await this.db.assento.findFirst({
      where: {
        id: data.id,
      },
    });

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

    if (assento) {
      throw new BadRequestException('O assento ja esta ocupado');
    }

    if (quantidadeAssentos == _count.assentos) {
      throw new BadRequestException('O voo ja esta com a lotação maxima');
    }

    return await this.db.assento.create({ data });
  }

  async findOne(id: number) {
    const assento = await this.db.assento.findUnique({
      where: {
        id: id,
      },
    });

    if (!assento) {
      throw new BadRequestException('Assento não encontrado');
    }

    return assento;
  }

  async update(id: number, data: UpdateAssentoDto) {
    const assento = await this.db.assento.findUnique({
      where: {
        id: id,
      },
    });

    if (!assento) {
      throw new BadRequestException('Assento não encontrado');
    }

    const novoAssento = await this.db.assento.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });

    return novoAssento;
  }

  async remove(id: number) {
    const assento = await this.db.assento.findUnique({
      where: {
        id: id,
      },
    });

    if (!assento) {
      throw new BadRequestException('Assento não encontrado');
    }

    return await this.db.assento.delete({
      where: {
        id: id,
      },
    });
  }
}
