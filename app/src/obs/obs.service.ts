import { Injectable } from '@nestjs/common';
import { CreateObDto } from './dto/create-ob.dto';
import { UpdateObDto } from './dto/update-ob.dto';

@Injectable()
export class ObsService {
  create(createObDto: CreateObDto) {
    return 'This action adds a new ob';
  }

  findAll() {
    return `This action returns all obs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ob`;
  }

  update(id: number, updateObDto: UpdateObDto) {
    return `This action updates a #${id} ob`;
  }

  remove(id: number) {
    return `This action removes a #${id} ob`;
  }
}
