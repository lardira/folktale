import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tale } from './tale.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  position: number;

  @Column()
  text: string;

  @Column()
  authorId: UUID;

  @Column({ default: 0 })
  score: number;

  @Column()
  taleId: number;

  @ManyToOne(() => Tale)
  @JoinColumn({ name: 'taleId' })
  tale: Tale;

  @Column({ nullable: true })
  previousChapterId: number;

  @ManyToOne(() => Chapter, (chapter) => chapter.nextChapters, {
    nullable: true,
  })
  @JoinColumn({ name: 'previousChapterId' })
  previousChapter: Chapter;

  @OneToMany(() => Chapter, (chapter) => chapter.previousChapter)
  nextChapters: Chapter[];
}
