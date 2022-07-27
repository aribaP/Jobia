import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resume } from './entity/resume.entity';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
  imports: [TypeOrmModule.forFeature([resume])],
})
export class ResumeModule {}
