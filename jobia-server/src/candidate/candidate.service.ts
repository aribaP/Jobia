import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Connection, Repository } from 'typeorm';
import { candidate } from './entity/candidate.entity';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';

@Injectable()
export class CandidateService {

    constructor(
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,
        @InjectConnection() private readonly connection: Connection,

    ) { }

    getC(): Promise<candidate[]> {
        return this.candidateRepository.find();
    }

    createC(candCreateDto: candidateCreateDto) {
        return this.candidateRepository.save(candCreateDto);
    }

    updateC(candUpdateDto: candidateUpdateDto, candId: number ){
        return this.candidateRepository.update(candId, candUpdateDto);
    }

    // showCByName(candName: string): Promise<candidate> {
    //     return this.candidateRepository.findOne({ where:{candName} }); 
    // }

    showCById(candId: number) {
        return this.candidateRepository.findOne({where :{candId}});
    }

    deleteC( candId: number ) {
        return this.candidateRepository.delete(candId);
    }
}
