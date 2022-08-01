import { Controller, Get, Req, Post, Patch, Param, Delete, ParseIntPipe, Body, UseInterceptors, UploadedFile, Request, HttpException, HttpStatus, UseFilters, UseGuards } from '@nestjs/common';
import { diskStorage } from 'multer';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { OrganizationService } from './organization.service';
import path = require('path');
import { organizationLoginDto } from './dto/organization-login.dts';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AuthGuard } from '@nestjs/passport';

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

    constructor(private orgService: OrganizationService) { }


    @Post('/signupOrg')
    async signUpOrganization(@Body(ValidationPipe) orgCreateDto: organizationCreateDto) {
        console.log('hi');
        const response = await this.orgService.signUpOrg(orgCreateDto);
        console.log(response);
        if(response === undefined) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Email already exists or password is not strong',
            }, HttpStatus.FORBIDDEN);
        }
        else{
            console.log("Yes",response);
            return response;
        }
    }

    @Post('/loginOrg')
    @UseFilters(HttpExceptionFilter)
    async LoginOrganization(@Body() orgLoginDto: organizationLoginDto) {
        console.log('hi');
        const response = await this.orgService.loginOrg(orgLoginDto);
        console.log(response);
        if(response === undefined) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Email already exists or password is not strong',
            }, HttpStatus.FORBIDDEN);
        }
        else{
            console.log("Yes",response);
            return response;
        }
    }

    @Patch('/:orgId')
    update(
        @Body() orgUpdateDto: organizationUpdateDto,
        @Param('orgId', ParseIntPipe) orgId: number) {

        return this.orgService.updateOrg(orgUpdateDto, orgId);
    }


    // @UseGuards(AuthGuard('jwt'))
    // @Get()
    // getorganizations() {
    //     return this.orgService.getO();
    //     // return "I am from organization controller"
    // }

    
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
    showJobDescriptionUnderOrganization() {
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
