import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  img: string | null;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
