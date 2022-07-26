import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { jobDescriptionCreateDto } from './dto/jobDescription-create.dto';
import { jobDescriptionUpdateDto } from './dto/jobDescription-update.dto';
import { jobDescription } from './entity/job-description.entity';

@Injectable()
export class JobDescriptionService {
    constructor(
        @InjectRepository(jobDescription)
        private jobDescriptionRepository: Repository<jobDescription>,
        @InjectConnection() private readonly connection: Connection,

    ) { }

    getJD(): Promise<jobDescription[]> {
        return this.jobDescriptionRepository.find();
    }

    createJD(jdCreateDto: jobDescriptionCreateDto) {
        return this.jobDescriptionRepository.save(jdCreateDto);
    }

    updateJD(jdUpdateDto: jobDescriptionUpdateDto, jdId: number ){
        return this.jobDescriptionRepository.update(jdId, jdUpdateDto);
    }

    // showCByName(jdName: string): Promise<jobDescription> {
    //     return this.jobDescriptionRepository.findOne({ where:{jdName} }); 
    // }

    showJDById(jdId: number) {
        return this.jobDescriptionRepository.findOne({where :{jdId}});
    }

    deleteJD( jdId: number ) {
        return this.jobDescriptionRepository.delete(jdId);
    }
}
