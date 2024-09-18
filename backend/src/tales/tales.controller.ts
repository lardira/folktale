import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TalesService } from './tales.service';
import { CreateTaleDto, UpdateTaleDto } from '../dto/tale.dto';
import { ChaptersService } from 'src/chapters/chapters.service';
import { CreateChapterDto, UpdateChapterDto } from 'src/dto/chapter.dto';

@Controller('tales')
export class TalesController {
  constructor(
    private readonly talesService: TalesService,
    private readonly chapterService: ChaptersService,
  ) {}

  @Post()
  create(@Body() createTaleDto: CreateTaleDto) {
    return this.talesService.create(createTaleDto);
  }

  @Get()
  findAll() {
    return this.talesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaleDto: UpdateTaleDto) {
    return this.talesService.update(+id, updateTaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talesService.remove(+id);
  }

  //chapters
  @Get(':id/chapters')
  findAllChapters(@Param('id') id: string) {
    return this.chapterService.findAll(+id);
  }

  @Get(':id/chapters/first')
  findFirstChapter(@Param('id') id: string) {
    return this.chapterService.findFirst(+id);
  }

  @Get(':id/chapters/from/:chapterId')
  findFrom(@Param('id') id: string, @Param('chapterId') chapterId: string) {
    return this.chapterService.findFrom(+id, +chapterId);
  }

  @Get(':id/chapters/:chapterId')
  findOneChapter(
    @Param('id') id: string,
    @Param('chapterId') chapterId: string,
  ) {
    return this.chapterService.findOne(+id, +chapterId);
  }

  @Post(':id/chapters')
  createChapter(
    @Param('id') id: string,
    @Body() createChapterDto: CreateChapterDto,
  ) {
    return this.chapterService.create(+id, createChapterDto);
  }

  @Patch(':id/chapters/:chapterId')
  updateChapter(
    @Param('chapterId') chapterId: string,
    @Body() updateChapterDto: UpdateChapterDto,
  ) {
    return this.chapterService.update(+chapterId, updateChapterDto);
  }

  @Delete(':id/chapters/:chapterId')
  removeChapter(@Param('id') id: string) {
    return this.chapterService.remove(+id);
  }
}
