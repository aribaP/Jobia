import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { organization } from './entity/organization.entity';
import validator from 'validator';
import { organizationLoginDto } from './dto/organization-login.dts';

@Injectable()
export class OrganizationService {

    constructor(
        @InjectRepository(organization)
        private organizationRepository: Repository<organization>,
        @InjectConnection() private readonly connection: Connection,

    ) { }


    async signUpOrg(orgCreateDto: organizationCreateDto): Promise<organization> {

        let pass = false;

        console.log(orgCreateDto);

        // password validation
        if (validator.isStrongPassword(orgCreateDto.orgPassword, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1           //, minSymbols: 1
        })) {  pass = true; }
        
        console.log(pass);
        const exist = await this.organizationRepository.findOne({where: {orgEmail: orgCreateDto.orgEmail}});
        if(!exist && pass){
            return this.organizationRepository.save(orgCreateDto);
        }
        else if(exist || !pass){
            console.log("exist");
            return;          // will be changed later
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


    updateOrg(orgUpdateDto: organizationUpdateDto, orgId: number ){
        return this.organizationRepository.update(orgId, orgUpdateDto);
    }

    
    getO(): Promise<organization[]> {
        return this.organizationRepository.find();
    }

    

    showOByEmail(orgEmail: string): Promise<organization> {
        return this.organizationRepository.findOne({ where:{orgEmail} }); 
    }

    showOById(orgId: number) {
        return this.organizationRepository.findOne({where :{orgId}});
    }

    deleteO( orgId: number ) {
        return this.organizationRepository.delete(orgId);
    }

    async showAllJDOrg(): Promise<organization[]> {
        return await this.organizationRepository.find({
            relations: ['jdFK']
        });
          
    }
    

    // updateO(orgId: number, orgLogo: string ){
    //     return this.organizationRepository.update(orgId, );
    // }
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
