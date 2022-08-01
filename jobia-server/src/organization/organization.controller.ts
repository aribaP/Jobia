import { ValidationPipe, Controller, Get, Req, Post, Patch, Param, Delete, ParseIntPipe, Body, UseFilters, UseGuards, UsePipes } from '@nestjs/common';
import { diskStorage } from 'multer';
import { organizationCreateDto } from './dto/organization-create.dto';
import { organizationUpdateDto } from './dto/organization-update.dto';
import { OrganizationService } from './organization.service';
import path = require('path');
import { organizationLoginDto } from './dto/organization-login.dts';
import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
// import { ValidationPipe } from 'src/pipes/validation.pipe';
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
export   class OrganizationController {

    constructor(private orgService: OrganizationService) { }

    @Post('/signupOrg')
    // @UsePipes(ValidationPipe)
    async signUpOrganization(@Body(ValidationPipe) orgCreateDto: organizationCreateDto) {
        return await this.orgService.signUpOrg(orgCreateDto);
        
    }

    @Post('/login')
    @UseFilters(HttpExceptionFilter)
    async LoginOrganization(@Body() orgLoginDto: organizationLoginDto) {
        console.log('hi');
        return await this.orgService.loginOrg(orgLoginDto);
    }

    @Patch('/:orgId')
    async update(
        @Body(ValidationPipe) orgUpdateDto: organizationUpdateDto,
        @Param('orgId', ParseIntPipe) orgId: number) {

        return await this.orgService.updateOrg(orgUpdateDto, orgId);
    }

    @Get('/showjobdescription/:orgId')
    showJobDescriptionUnderOrganization(@Param('orgId', ParseIntPipe) orgId: number) {
        return this.orgService.showAllJDOrg(orgId);
    }

    @Get('/:orgId')
    async getorganizationById(@Param('orgId') orgId: number) {
        return await this.orgService.showOById(orgId);
    }

   
    @Delete('/:orgId')
    async deleteorganization(@Param('orgId', ParseIntPipe) orgId: number) {
        return await this.orgService.deleteO(orgId);
    }

     // @Get('/:orgEmail')
    // async getorganizationByName(@Param('orgEmail') orgEmail: string) {
    //     return await this.orgService.showOByEmail(orgEmail);
    // }

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
