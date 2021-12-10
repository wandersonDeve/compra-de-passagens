import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { Companhia } from './entities/companhia.entity';

@Injectable()
export class CompanhiasService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateCompanhiaDto) {
    const companhia = await this.db.companhias.findUnique({
      where: {
        nome: data.nome,
      },
    });

    if (companhia != null) {
      throw new BadRequestException('Esse nome ja esta em uso');
    }

    const novaCompanhia = await this.db.companhias.create({ data });

    return novaCompanhia;
  }

  async findAll(): Promise<Companhia[]> {
    return this.db.companhias.findMany();
  }

  async findOne(id: number){
    const companhia = await this.db.companhias.findUnique({
      where: {
        id: id,
      },
      include: {
        voos: true,
      },
    });

    if (!companhia) {
      throw new Error('Companhia não encontrada');
    }

    return companhia;
  }

  async update(id: number, data: UpdateCompanhiaDto): Promise<Companhia> {
    const companhia = await this.db.companhias.findUnique({
      where: {
        id: id,
      },
    });

    if (!companhia) {
      throw new Error('Companhia não encontrada');
    }

    const novaCompanhia = await this.db.companhias.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });

    return novaCompanhia;
  }

  async remove(id: number): Promise<Companhia> {
    const companhia = await this.db.companhias.findUnique({
      where: {
        id: id,
      },
    });

    if (!companhia) {
      throw new Error('Companhia não encontrada');
    }

    return this.db.companhias.delete({
      where: {
        id: id,
      },
    });
  }
}
