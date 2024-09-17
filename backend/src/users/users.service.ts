import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: UUID) {
    return this.usersRepository.findOne({
      relations: ['tales'],
      where: { id },
    });
  }

  async update(id: UUID, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id }, updateUserDto);
  }

  async remove(id: UUID) {
    return this.usersRepository.delete(id);
  }
}
