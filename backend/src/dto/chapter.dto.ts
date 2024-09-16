import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';

export class CreateChapterDto {
  position: number;
  text: string;
  authorId: UUID;
  score: number;
  previousChapterId: number | null;
}

export class UpdateChapterDto extends PartialType(CreateChapterDto) {}
