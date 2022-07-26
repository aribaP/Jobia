import { Controller, Get, Req, Post, Patch, Param, Delete, ParseIntPipe, Body} from '@nestjs/common';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { OrganizationService } from './organization.service';


@Controller('organization')
export class OrganizationController {

    constructor(private orgService: OrganizationService) {}

    @Get()
    getorganizations() {
        return this.orgService.getO();
        // return "I am from organization controller"
    }

    @Post()
    store(@Body() orgCreateDto: organizationCreateDto){

        return this.orgService.createO(orgCreateDto);
    }

    @Patch('/:orgId')
    update(
        @Body() orgUpdateDto: organizationUpdateDto,
        @Param('orgId', ParseIntPipe) orgId: number) {
    
        return this.orgService.updateO(orgUpdateDto, orgId);
    }
    @Get('/:orgId')
    getorganizationById(@Param('orgId') orgId: number) {
        return this.orgService.showOById(orgId);
    }

    // @Get('/:orgName')
    // getorganizationByName(@Param('orgName') orgName: string) {
    //   return this.orgService.showCByName(orgName);
    // }

    @Delete('/:orgId')
    deleteorganization(@Param('orgId', ParseIntPipe) orgId: number) {
        return this.orgService.deleteO(orgId);
    }

}
