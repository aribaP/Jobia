import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { candidateSignupDto } from './dto/candidate-signup.dto';
import { candidate } from './entity/candidate.entity';

@Injectable()
export class CandidateService {

    constructor(
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,
    ) { }

    getC(): Promise<candidate[]> {
        return this.candidateRepository.find();
    }

    createC(candSignupDto: candidateSignupDto) {
        return this.candidateRepository.save(candSignupDto);
    }

    // updateC(req: Request, param: { candId: number }) {
    //     return {body: req.body, param};
    // }

    // showCById(param: { candId: number }) {
    //     return param;
    // }

    // deleteC(param: { candId: number }) {
    //     return param;
    // }
}
