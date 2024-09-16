import { Module } from '@nestjs/common';
import { TalesService } from './tales.service';
import { TalesController } from './tales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tale } from '../entities/tale.entity';
import { ChaptersModule } from 'src/chapters/chapters.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tale]), ChaptersModule],
  controllers: [TalesController],
  providers: [TalesService],
})
export class TalesModule {}
