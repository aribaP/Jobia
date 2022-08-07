import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { organization } from './entity/organization.entity';
import validator from 'validator';
import { organizationLoginDto } from './dto/organization-login.dts';
import { from, Observable, switchMap } from 'rxjs';
import { score } from 'src/score/entity/score.entity';
import { resume } from 'src/resume/entity/resume.entity';

@Injectable()
export class OrganizationService {

    constructor(
        @InjectRepository(organization)
        private organizationRepository: Repository<organization>,
        @InjectConnection() private readonly connection: Connection,
        @InjectRepository(score)
        private scoreRepository: Repository<score>,

        @InjectRepository(resume)
        private resumeRepository: Repository<resume>,

    ) { }


    async signUpOrg(orgCreateDto: organizationCreateDto): Promise<organization> {

        const exist = await this.organizationRepository.findOne({ where: { orgEmail: orgCreateDto.orgEmail } });
        if (!exist) {
            return this.organizationRepository.save(orgCreateDto);
        }

    }


    async loginOrg(orgLoginDto: organizationLoginDto): Promise<organization> {

        console.log(orgLoginDto);
        return await this.organizationRepository.findOne({ where: { orgEmail: orgLoginDto.orgEmail, orgPassword: orgLoginDto.orgPassword } })
            .then((result) => {
                if (result) {
                    return result;
                }
                else {
                    throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
                }
            })
            .catch(() => {
                throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
            });

    }


    async updateOrg(orgUpdateDto: organizationUpdateDto, orgId: number) {
        return await this.organizationRepository.update(orgId, orgUpdateDto);
    }


    showOById(orgId: number) {
        return this.organizationRepository.findOne({ where: { orgId } });
    }


    updateLogo(orgUpdateDto: organizationUpdateDto, orgId: number) {
        return this.organizationRepository.update(orgId, orgUpdateDto);
    }

    deleteO(orgId: number) {
        return this.organizationRepository.delete(orgId);
    }

    async showAllJDOrg(orgFK: number): Promise<organization[]> {
        return await this.organizationRepository.find({
            relations: ['jdFK'],
            where: { orgId: orgFK }
        });
    }



    async getNotification(orgFK: number) {
        const getJD = await this.organizationRepository.find({
            relations: ['jdFK'],
            where: { orgId: orgFK }
        });

        const scores = await this.scoreRepository.find({ where: { jdId: getJD[0].jdFK[0].jdId } });
        let resumes; 
        let resumeObject = new Array();
        for (let index = 0; index < scores.length; index++) {

            resumes = await this.resumeRepository.find({
                relations: ['candFK'],
                where: { resId: scores[index]['resId'] }
            });
            resumeObject.push(resumes);
        }

        console.log("Ariba\n");

        for (let index = 0; index < scores.length; index++) {
            let element = scores[index];
            let getEducation = await this.resumeRepository.find({
                relations: ['eduFK'],
                where: { resId: scores[index]['resId'] }
            });

            let getExperience = await this.resumeRepository.find({
                relations: ['expFK'],
                where: { resId: scores[index]['resId'] }
            });

            let getProject = await this.resumeRepository.find({
                relations: ['projFK'],
                where: { resId: scores[index]['resId'] }
            });
            console.log("Here");
            console.log(getExperience[0]['expFK']);

            resumeObject[index] = [{
                careerObjective: resumeObject[index][0].careerObjective,
                position: resumeObject[index][0].position,
                skills: resumeObject[index][0].skills,
                linkedIn: resumeObject[index][0].linkedIn,
                gitHub: resumeObject[index][0].gitHub,

                city: resumeObject[index][0].candFK['candCity'],
                candEmail: resumeObject[index][0].candFK['candEmail'],
                candContactNumber: resumeObject[index][0].candFK['candContactNumber'],
                candName: resumeObject[index][0].candFK['candName'],
                education: getEducation[0]['eduFK'],
                experience: getExperience[0]['expFK'],
                projects: getProject[0]['projFK']
            }];


        }

        return resumeObject;

    }






















    // updateO(orgId: number, orgLogo: string ){
    //     return this.organizationRepository.update(orgId, );
    // }
    // getO(): Promise<organization[]> {
    //     return this.organizationRepository.find();
    // }
    showOByEmail(orgEmail: string): Promise<organization> {
        return this.organizationRepository.findOne({ where: { orgEmail } });
    }
}


// {
//     "orgId": 1,
//     "orgName": "Folio3",
//     "orgEmail": "folio3@gmail.com",
//     "orgPassword": "Folio3",
//     "orgContactNumber": "3043048",
//     "orgLogo": "nfdieur"
// }

// {
//      "jdId": 7,
//      "jdPosition": "Folio3",
//      "jdMinimumExperience": 3,
//      "jdRequiredSkills": "Folio3efeifner",
//      "jdLocation": "FB",
//      "jdCity": "Karachi"
// }
