import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';

export class CreateTaleDto {
  title: string;
  description: string;
  max_chapter: number;
  img: string | null;
  authorId: UUID;
  maxChapterSize: number;
}

export class UpdateTaleDto extends PartialType(CreateTaleDto) {}
