import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { candidate } from './entity/candidate.entity';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';
import { candidateLoginDto } from './dto/candidate-login.dts';

@Injectable()
export class CandidateService {

    constructor(
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,

    ) { }

    async signUpCand(candCreateDto: candidateCreateDto): Promise<candidate> {

        const exist = await this.candidateRepository.findOne({where: {candEmail: candCreateDto.candEmail}});
        if(!exist){
            return this.candidateRepository.save(candCreateDto);
        }
           
    }


    async loginCand(candLoginDto: candidateLoginDto): Promise<candidate> {

        console.log(candLoginDto);
        return await this.candidateRepository.findOne({where: {candEmail: candLoginDto.candEmail, candPassword: candLoginDto.candPassword}})
            .then((result) => {
                if(result) {
                    return result;
                }
                else{
                    throw new HttpException('Account not found',HttpStatus.NOT_FOUND);
                }
            })
            .catch(() => {
                throw new HttpException('Account not found',HttpStatus.NOT_FOUND);
            });
            
    }
     

    async updateC(candUpdateDto: candidateUpdateDto, candId: number ){
        return await this.candidateRepository.update(candId, candUpdateDto);
    }

    
    showCById(candId: number) {
        return this.candidateRepository.findOne({where :{candId}});
    }

    deleteC( candId: number ) {
        return this.candidateRepository.delete(candId);
    }

    async showResumeByCandidateId(candFK: number): Promise<candidate[]> {
        return await this.candidateRepository.find({
            relations: ['resFK'], 
            where: {candId: candFK }
        });
          
    }


    



    // Extra for auth
    showCByEmail(cndEmail: string): Promise<candidate> {
        return this.candidateRepository.findOne({where :{candEmail: cndEmail}});
        // return this.candidateRepository.createQueryBuilder().where('candEmail = :candEmail', { candEmail }).execute();
    
    }
    
}
