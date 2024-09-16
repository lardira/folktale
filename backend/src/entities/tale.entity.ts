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

  @Column({ default: 0 })
  maxChapter: number;

  @Column({ default: 256 })
  maxChapterSize: number;

  @Column({ nullable: true })
  img: string;

  @Column()
  authorId: UUID;
}
