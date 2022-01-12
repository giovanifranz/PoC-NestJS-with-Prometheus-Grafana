import { PartialType } from '@nestjs/swagger';
import { CreateObDto } from './create-ob.dto';

export class UpdateObDto extends PartialType(CreateObDto) {}
