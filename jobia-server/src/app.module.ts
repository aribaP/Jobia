import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CandidateModule } from './candidate/candidate.module';
import { ResumeExperienceModule } from './resume-experience/resume-experience.module';
import { ResumeEductionModule } from './resume-eduction/resume-eduction.module';
import { ResumeProjectsModule } from './resume-projects/resume-projects.module';

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
      entities: [],
      synchronize: true,
      autoLoadEntities: true, 
    }),
    ResumeExperienceModule,
    ResumeEductionModule,
    ResumeProjectsModule,
  ],
})
export class AppModule {}
