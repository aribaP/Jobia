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

    async createJD(jdCreateDto: jobDescriptionCreateDto): Promise<jobDescription> {
        console.log(jdCreateDto)
        return await this.jobDescriptionRepository.save(jdCreateDto);
    }

    async updateJD(jdUpdateDto: jobDescriptionUpdateDto, jdId: number ){
        return await this.jobDescriptionRepository.update(jdId, jdUpdateDto);
    }


    async showJDById(jdId: number): Promise<jobDescription>{
        return await this.jobDescriptionRepository.findOne({where :{jdId}});
    }

    async deleteJD( jdId: number ) {
        return await this.jobDescriptionRepository.delete(jdId);
    }

    // async getJD(): Promise<jobDescription[]> {
    //     return await this.jobDescriptionRepository.find();
    // }
}
