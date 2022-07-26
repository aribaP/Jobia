import { Controller, Get, Req, Post, Patch, Param, Delete} from '@nestjs/common';
import { Request } from 'express';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {

    constructor (private orgService: OrganizationService) {}
    
    @Get()
    getOrganization(){
        return this.orgService.getOrg();
    }

    // @Post()
    // store(@Req() req: Request) {
    //     return this.orgService.createC(req);
    // }

    // @Patch('/:orgId')
    // update(@Req() req: Request, @Param() param: {orgId: number},) {
    //     return this.orgService.updateC(req, param);
    // }

    // @Get('/:orgId')
    // getorgidateById(@Param() param: {orgId: number}) {
    //     return this.orgService.showCById(param);
    // }

    // @Delete('/:orgId')
    // deleteorgidate(@Param() params: {orgId: number}) {
    //     return this.orgService.deleteC(params);
    // }


}
