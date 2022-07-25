import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resumeExperience } from './entity/resume-experience.entity';
import { ResumeExperienceController } from './resume-experience.controller';
import { ResumeExperienceService } from './resume-experience.service';

@Module({
  controllers: [ResumeExperienceController],
  providers: [ResumeExperienceService],
  imports: [TypeOrmModule.forFeature([resumeExperience])],
})
export class ResumeExperienceModule {}
