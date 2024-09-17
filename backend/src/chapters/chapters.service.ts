import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChapterDto, UpdateChapterDto } from 'src/dto/chapter.dto';
import { Chapter } from 'src/entities/chapter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
  ) {}

  async create(taleId: number, createChapterDto: CreateChapterDto) {
    // for introductory chapter
    if (!createChapterDto.previousChapterId) {
      if (await this.chapterRepository.findOneBy({ position: 0, taleId })) {
        throw new Error('initial chapter already exists');
      }

      const newChapter = this.chapterRepository.create({
        ...createChapterDto,
        taleId,
      });

      return this.chapterRepository.save(newChapter);
    }

    const previousChapter = await this.findOne(
      taleId,
      createChapterDto.previousChapterId,
    );

    if (!previousChapter) {
      throw new Error(
        `not found with id ${createChapterDto.previousChapterId}`,
      );
    }

    const newChapter = this.chapterRepository.create({
      ...createChapterDto,
      taleId,
      previousChapter,
      position: previousChapter.position + 1,
    });

    return this.chapterRepository.save(newChapter);
  }

  async findAll(taleId: number) {
    return this.chapterRepository.findBy({ taleId });
  }

  async findOne(taleId: number, id: number) {
    return this.chapterRepository.findOne({
      where: { id, taleId },
      relations: ['nextChapters'],
      order: {
        nextChapters: {
          score: 'DESC',
        },
      },
    });
  }

  async findFirst(taleId: number) {
    return this.chapterRepository.findOne({
      where: { position: 0, taleId },
      relations: ['nextChapters'],
      order: {
        nextChapters: {
          score: 'DESC',
        },
      },
    });
  }

  async update(id: number, updateChapterDto: UpdateChapterDto) {
    return this.chapterRepository.update({ id }, updateChapterDto);
  }

  async remove(id: number) {
    return this.chapterRepository.delete(id);
  }
}
