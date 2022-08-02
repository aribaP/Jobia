import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resume } from './entity/resume.entity';
import { resumeEducation } from 'src/resume-education/entity/resume-education.entity';
import { resumeExperience } from 'src/resume-experience/entity/resume-experience.entity';
import { resumeProjects } from 'src/resume-projects/entity/resume-projects.entity';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
  imports: [TypeOrmModule.forFeature([resume, resumeEducation, resumeExperience, resumeProjects])],
})
export class ResumeModule {}
