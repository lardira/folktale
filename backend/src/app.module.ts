import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalesModule } from './tales/tales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TalesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './.local/test.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
