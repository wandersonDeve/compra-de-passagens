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
import { VooService } from './voo.service';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';

@Controller('voo')
export class VooController {
  constructor(private readonly vooService: VooService) {}

  @Post()
  async create(@Body() createVooDto: CreateVooDto) {
    return this.vooService.create(createVooDto);
  }

  @Get()
  async findAll() {
    return this.vooService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vooService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVooDto: UpdateVooDto,
  ) {
    return this.vooService.update(id, updateVooDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.vooService.remove(id);
  }
}
