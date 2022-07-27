import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jobDescription } from './entity/job-description.entity';
import { JobDescriptionController } from './job-description.controller';
import { JobDescriptionService } from './job-description.service';

@Module({
  controllers: [JobDescriptionController],
  providers: [JobDescriptionService],
  imports: [TypeOrmModule.forFeature([jobDescription])],
})
export class JobDescriptionModule {}
