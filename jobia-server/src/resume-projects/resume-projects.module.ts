import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resumeProjects } from './entity/resume-projects.entity';
import { ResumeProjectsController } from './resume-projects.controller';
import { ResumeProjectsService } from './resume-projects.service';

@Module({
  controllers: [ResumeProjectsController],
  providers: [ResumeProjectsService],
  imports: [TypeOrmModule.forFeature([resumeProjects])],
})
export class ResumeProjectsModule {}
