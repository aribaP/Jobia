import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { organization } from './entity/organization.entity';

@Injectable()
export class OrganizationService {

    constructor(
        @InjectRepository(organization)
        private organizationRepository: Repository<organization>,
        @InjectConnection() private readonly connection: Connection,

    ) { }

    getO(): Promise<organization[]> {
        return this.organizationRepository.find();
    }

    createO(orgCreateDto: organizationCreateDto) {
        return this.organizationRepository.save(orgCreateDto);
    }

    updateO(orgUpdateDto: organizationUpdateDto, orgId: number ){
        return this.organizationRepository.update(orgId, orgUpdateDto);
    }

    showCByName(orgName: string): Promise<organization> {
        return this.organizationRepository.findOne({ where:{orgName} }); 
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
