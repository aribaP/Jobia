import { Module } from '@nestjs/common';
import { ResumeEductionController } from './resume-eduction.controller';
import { ResumeEducationService } from './resume-education.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resumeEduction } from './entity/resume-education.entity';

@Module({
  controllers: [ResumeEductionController],
  providers: [ResumeEducationService],
  imports: [TypeOrmModule.forFeature([resumeEduction])],
})
export class ResumeEductionModule {}
