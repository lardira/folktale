import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TalesService } from './tales.service';
import { CreateTaleDto, UpdateTaleDto } from './dto/tale.dto';

@Controller('tales')
export class TalesController {
  constructor(private readonly talesService: TalesService) {}

  @Post()
  create(@Body() createTaleDto: CreateTaleDto) {
    return this.talesService.create(createTaleDto);
  }

  @Get()
  findAll() {
    return this.talesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaleDto: UpdateTaleDto) {
    return this.talesService.update(+id, updateTaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talesService.remove(+id);
  }
}
