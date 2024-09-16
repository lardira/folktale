import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tale } from './entities/tale.entity';
import { Repository } from 'typeorm';
import { CreateTaleDto, UpdateTaleDto } from './dto/tale.dto';

@Injectable()
export class TalesService {
  constructor(
    @InjectRepository(Tale)
    private talesRepository: Repository<Tale>,
  ) {}

  async create(createTaleDto: CreateTaleDto) {
    const newTale = this.talesRepository.create(createTaleDto);
    return this.talesRepository.save(newTale);
  }

  async findAll() {
    return this.talesRepository.find();
  }

  async findOne(id: number) {
    return this.talesRepository.findOneBy({ id });
  }

  async update(id: number, updateTaleDto: UpdateTaleDto) {
    return this.talesRepository.update({ id }, updateTaleDto);
  }

  async remove(id: number) {
    return this.talesRepository.delete(id);
  }
}
