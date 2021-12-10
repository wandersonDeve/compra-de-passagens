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
import { AssentoService } from './assento.service';
import { CreateAssentoDto } from './dto/create-assento.dto';
import { UpdateAssentoDto } from './dto/update-assento.dto';

@Controller('assento')
export class AssentoController {
  constructor(private readonly assentoService: AssentoService) {}

  @Post()
  async create(@Body() createAssentoDto: CreateAssentoDto) {
    return this.assentoService.create(createAssentoDto);
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.assentoService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAssentoDto: UpdateAssentoDto,
  ) {
    return this.assentoService.update(id, updateAssentoDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.assentoService.remove(id);
  }
}
