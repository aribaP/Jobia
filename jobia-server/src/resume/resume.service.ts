import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { resumeCreateDto } from './dto/resume-create.dto';
import { resumeUpdateDto } from './dto/resume-update.dto';
import { resume } from './entity/resume.entity';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(resume)
        private resumeRepository: Repository<resume>,

    ) { }

    getR(): Promise<resume[]> {
        return this.resumeRepository.find();
    }

    createR(resCreateDto: resumeCreateDto) {
        return this.resumeRepository.save(resCreateDto);
    }

    updateR(resUpdateDto: resumeUpdateDto, resumeId: number ){
        return this.resumeRepository.update(resumeId, resUpdateDto);
    }


    showRById(resumeId: number) {
        return this.resumeRepository.findOne({where :{resumeId}});
    }

    deleteR( resId: number ) {
        return this.resumeRepository.delete(resId);
    }
}
