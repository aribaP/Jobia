import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { jobDescription } from 'src/job-description/entity/job-description.entity';
import { Repository } from 'typeorm';
import { score } from './entity/score.entity';

@Injectable()
export class ScoreService {
    constructor(
        @InjectRepository(score)
        private scoreRepository: Repository<score>,
        @InjectRepository(jobDescription)
        private jdRepository: Repository<jobDescription>
    ) { }


    async newJobDescriptionIsAdded(jdId: number){
        const jdObject = await this.jdRepository.findOne({where :{jdId}});
        const answer = Object.values(JSON.parse(JSON.stringify(jdObject)));
        console.log(answer); 

    }
}
