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


    async showOById(orgId: number)  {
        console.log(await this.organizationRepository.findOne({ where: { orgId } }));
        return await this.organizationRepository.findOne({ where: { orgId } });
    }


    updateLogo(orgUpdateDto: organizationUpdateDto, orgId: number) {
        return this.organizationRepository.update(orgId, orgUpdateDto);
    }

    deleteO(orgId: number) {
        return this.organizationRepository.delete(orgId);
    }

    async showAllJDOrg(orgFK: number) {
        const all =  await this.organizationRepository.find({
            relations: ['jdFK'],
            where: { orgId: orgFK }
        });

        console.log(all[0]['jdFK']);
        const returnJDs = all[0]['jdFK'];
        return returnJDs;


    }



    async getNotification(orgFK: number) {
        const getJD = await this.organizationRepository.find({
            relations: ['jdFK'],
            where: { orgId: orgFK }
        });

        console.log(getJD[0].jdFK.length);
        var scores = new Array();
        for (let index = 0; index < getJD[0].jdFK.length; index++) {
            console.log( await this.scoreRepository.find({ where: { jdId: getJD[0].jdFK[index].jdId } }))
            if((await this.scoreRepository.find({ where: { jdId: getJD[0].jdFK[index].jdId } })).length != 0)
                scores.push(await this.scoreRepository.find({ where: { jdId: getJD[0].jdFK[index].jdId } }));

        }

        console.log(scores.length);
        let resumes;
        let resumeObject = new Array();

        for (let index = 0; index < scores.length; index++) {
            for (let i = 0; i < scores[index].length; i++) {
     
                resumes = await this.resumeRepository.find({
                    relations: ['candFK'],
                    where: { resId: scores[index]['resId'] }
                });
                resumeObject.push(resumes);
            }
        }

        for (let index = 0; index < scores.length; index++) {
            let element = scores[index];
            console.log(scores[index][0].scoreId);
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

            resumeObject[index] = {
                resId: resumeObject[index][index].resId,
                careerObjective: resumeObject[index][index].careerObjective,
                position: resumeObject[index][index].position,
                skills: resumeObject[index][index].skills,
                linkedIn: resumeObject[index][index].linkedIn,
                gitHub: resumeObject[index][index].gitHub,
                scoreId: scores[index][0].scoreId,
                city: resumeObject[index][index].candFK['candCity'],
                candId: resumeObject[index][index].candFK['candId'],
                candEmail: resumeObject[index][index].candFK['candEmail'],
                candContactNumber: resumeObject[index][index].candFK['candContactNumber'],
                candName: resumeObject[index][index].candFK['candName'],
                education: getEducation[index]['eduFK'],
                experience: getExperience[index]['expFK'],
                projects: getProject[index]['projFK'],

            };


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
