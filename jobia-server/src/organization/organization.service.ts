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

@Injectable()
export class OrganizationService {

    constructor(
        @InjectRepository(organization)
        private organizationRepository: Repository<organization>,
        @InjectConnection() private readonly connection: Connection,

    ) { }


    async signUpOrg(orgCreateDto: organizationCreateDto): Promise<organization> {

        const exist = await this.organizationRepository.findOne({where: {orgEmail: orgCreateDto.orgEmail}});
        if(!exist){
            return this.organizationRepository.save(orgCreateDto);
        }
           
    }


    async loginOrg(orgLoginDto: organizationLoginDto): Promise<organization> {

        console.log(orgLoginDto);
        return await this.organizationRepository.findOne({where: {orgEmail: orgLoginDto.orgEmail, orgPassword: orgLoginDto.orgPassword}})
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


    async updateOrg(orgUpdateDto: organizationUpdateDto, orgId: number ){
        return await this.organizationRepository.update(orgId, orgUpdateDto);
    }


    showOById(orgId: number) {
        return this.organizationRepository.findOne({where :{orgId}});
    }


    updateLogo(orgUpdateDto: organizationUpdateDto, orgId: number){
        return this.organizationRepository.update(orgId, orgUpdateDto);
    }

    deleteO( orgId: number ) {
        return this.organizationRepository.delete(orgId);
    }

    async showAllJDOrg(orgFK: number): Promise<organization[]> {
        return await this.organizationRepository.find({
            relations: ['jdFK'], 
            where: {orgId: orgFK }
        });      
    }


    

    // updateO(orgId: number, orgLogo: string ){
    //     return this.organizationRepository.update(orgId, );
    // }
    // getO(): Promise<organization[]> {
    //     return this.organizationRepository.find();
    // }
    showOByEmail(orgEmail: string): Promise<organization> {
        return this.organizationRepository.findOne({ where:{orgEmail} }); 
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
