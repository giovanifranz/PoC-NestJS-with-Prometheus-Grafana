import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObsService } from './obs.service';
import { CreateObDto } from './dto/create-ob.dto';
import { UpdateObDto } from './dto/update-ob.dto';

@Controller('obs')
export class ObsController {
  constructor(private readonly obsService: ObsService) {}

  @Post()
  create(@Body() createObDto: CreateObDto) {
    return this.obsService.create(createObDto);
  }

  @Get()
  findAll() {
    return this.obsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObDto: UpdateObDto) {
    return this.obsService.update(+id, updateObDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obsService.remove(+id);
  }
}
