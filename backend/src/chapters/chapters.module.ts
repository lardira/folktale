import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from 'src/entities/chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  providers: [ChaptersService],
  exports: [ChaptersService],
})
export class ChaptersModule {}
