import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CompanhiasService } from './companhias.service';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { Companhia } from './entities/companhia.entity';

@Controller('companhias')
export class CompanhiasController {
  constructor(private readonly companhiasService: CompanhiasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createCompanhiaDto: CreateCompanhiaDto) {
    return this.companhiasService.create(createCompanhiaDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Companhia[]> {
    return this.companhiasService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.companhiasService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id',ParseIntPipe) id: number,
    @Body() updateCompanhiaDto: UpdateCompanhiaDto,
  ): Promise<Companhia> {
    return this.companhiasService.update(id, updateCompanhiaDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id',ParseIntPipe) id: number): Promise<Companhia> {
    return this.companhiasService.remove(id);
  }
}
