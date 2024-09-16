import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  maxChapter: number;

  @Column()
  maxChapterSize: number;

  @Column()
  img: string;

  @Column()
  authorId: UUID;
}
