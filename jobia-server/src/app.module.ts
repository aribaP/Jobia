import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateModule } from './candidate/candidate.module';
import { ResumeModule } from './resume/resume.module';
import { OrganizationModule } from './organization/organization.module';
import { JobDescriptionModule } from './job-description/job-description.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ariba05',
      database: 'jobia',
      entities: [CandidateModule, ResumeModule, OrganizationModule, JobDescriptionModule],
      synchronize: true,
    }),
    CandidateModule,
    ResumeModule,
    OrganizationModule,
    JobDescriptionModule,
  ],
})
export class AppModule {}
