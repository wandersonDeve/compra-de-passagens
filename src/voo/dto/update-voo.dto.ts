import { PartialType } from '@nestjs/mapped-types';
import { CreateVooDto } from './create-voo.dto';

export class UpdateVooDto extends PartialType(CreateVooDto) {}
