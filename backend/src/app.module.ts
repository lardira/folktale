import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalesModule } from './tales/tales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChaptersModule } from './chapters/chapters.module';
import { UsersModule } from './users/users.module';

const configurableImports = [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './.local/test.db',
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  }),
];

@Module({
  imports: [...configurableImports, TalesModule, ChaptersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
