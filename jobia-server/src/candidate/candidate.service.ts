import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { candidate } from './entity/candidate.entity';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';
import { candidateLoginDto } from './dto/candidate-login.dts';
import { score } from 'src/score/entity/score.entity';
import { resume } from 'src/resume/entity/resume.entity';
import { jobDescription } from 'src/job-description/entity/job-description.entity';
import { organization } from 'src/organization/entity/organization.entity';

@Injectable()
export class CandidateService {

    constructor(
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,
        @InjectRepository(score)
        private scoreRepository: Repository<score>, 
        @InjectRepository(jobDescription)
        private jobDescriptionRepository: Repository<jobDescription>,
        @InjectRepository(organization)
        private organizationRepository: Repository<organization>,
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
    getC(){
        
    }



    async getNotification(candFK: number) {
        const getResume = await this.candidateRepository.find({
            relations: ['resFK'],
            where: { candId: candFK}
        });

        const scores = await this.scoreRepository.find({where: {resId: getResume[0]['resFK']['resId']}});

        const jd = await this.jobDescriptionRepository.find({
            relations:['orgFK'],
            where: {jdId: scores[0]['jdId']}
        });

        return [{
            orgName: jd[0]['orgFK']['orgName'],
            jdRequiredSkills: jd[0]['jdRequiredSkills'],
            jdPosition: jd[0]['jdPosition'],
            jdMinimumExperience: jd[0]['jdMinimumExperience'],
            jdCity: jd[0]['jdCity'], 
            jdLocation: jd[0]['jdLocation']
        }];

        
    }


    



    // Extra for auth
    showCByEmail(cndEmail: string): Promise<candidate> {
        return this.candidateRepository.findOne({where :{candEmail: cndEmail}});
        // return this.candidateRepository.createQueryBuilder().where('candEmail = :candEmail', { candEmail }).execute();
    
    }
    
}
