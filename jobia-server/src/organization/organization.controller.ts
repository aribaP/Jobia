import { Controller, Get, Req, Post, Patch, Param, Delete, ParseIntPipe, Body, UseInterceptors, UploadedFile, Request} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { map, of, tap, Observable } from 'rxjs';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { OrganizationService } from './organization.service';
import path  = require('path');
import { organization } from './entity/organization.entity';
import { format } from 'path';

export const storage = {
    storage: diskStorage({
        destination: '/uploads/',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension: string = path.parse(file.originalname).ext;

            cb(null, filename + extension)
        }
    })
}

@Controller('organization')
export class OrganizationController {

    constructor(private orgService: OrganizationService) {}

    @Get('/onlyorg')
    getorganizations() {
        return this.orgService.getO();
        // return "I am from organization controller"
    }

    @Post('/signupOrg')
    signUpOrganization(@Body() orgCreateDto: organizationCreateDto){
        console.log('hi');
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

    @Get('/:orgEmail')
    getorganizationByName(@Param('orgEmail') orgEmail: string) {
      return this.orgService.showOByEmail(orgEmail);
    }

    @Delete('/:orgId') 
    deleteorganization(@Param('orgId', ParseIntPipe) orgId: number) {
        return this.orgService.deleteO(orgId);
    }

    @Get()
    showJobDescriptionUnderOrganization(){
        return this.orgService.showAllJDOrg();
    }

    // @Post('/upload')
    // @UseInterceptors(FileInterceptor('file', storage))
    // uploadOrgLogo(@UploadedFile() file){
    //     console.log(file);
    //     return of({ filename: file.filename})
    // }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file', storage))
    // uploadFile(@UploadedFile() file, @Request() req, @Body() orgCreateDto: organizationCreateDto ) {
    //     const org: organization = req.organization;
    //     console.log(org);
    //     return this.orgService.createO(orgCreateDto);
    //         // .pipe(tap((organization: organization) => console.log(organization)),
    //         // map((organization:organization) => ({orgLogo: organization.orgLogo}))
    //     // )
    // }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file', storage))
    // uploadFile(@UploadedFile() file, @Request() req){
    //     const org: organization = req.org;
    //     console.log(file.filename);
    //     // return this.orgService.updateO(org.orgId, file.filename);
        
    // }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file', storage))
    // uploadFile(@UploadedFile() file, @Request() req ){
    //     console.log(file);
    //     const imagePath = '/uploads/' + file.filename;
    //     return this.orgService.updateO(1, imagePath);

    // }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file', storage))
    // uploadFile(@UploadedFile() file, ): Observable <Object> {
    //     console.log(file);
    //     return this.orgService.updateO(org.orgId, file.filename);

    // }
}
