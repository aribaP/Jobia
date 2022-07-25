import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CandidateModule } from './candidate/candidate.module';
import { candidate } from './candidate/entity/candidate.entity';
import { ResumeExperienceModule } from './resume-experience/resume-experience.module';
import { ResumeEductionModule } from './resume-education/resume-eduction.module';
import { ResumeProjectsModule } from './resume-projects/resume-projects.module';
import { ResumeEducationService } from './resume-education/resume-education.service';
import { resume } from './resume/entity/resume.entity';
import { organization } from './organization/entity/organization.entity';
import { jobDescription } from './job-description/entity/job-description.entity';
import { resumeEduction } from './resume-education/entity/resume-education.entity';
import { resumeExperience } from './resume-experience/entity/resume-experience.entity';
import { resumeProjects } from './resume-projects/entity/resume-projects.entity';

@Module({
  controllers: [AppController],
  imports: [
    CandidateModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'ariba05',
      database: 'jobia',
      entities: [candidate, resume, organization, jobDescription, resumeEduction, resumeExperience, resumeProjects],
      synchronize: true,
      autoLoadEntities: true, 
    }),
    ResumeExperienceModule,
    ResumeEductionModule,
    ResumeProjectsModule,
  ],
  providers: [ResumeEducationService],
})
export class AppModule {}
