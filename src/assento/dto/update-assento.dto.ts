import { PartialType } from '@nestjs/mapped-types';
import { CreateAssentoDto } from './create-assento.dto';

export class UpdateAssentoDto extends PartialType(CreateAssentoDto) {}
