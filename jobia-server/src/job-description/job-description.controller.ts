import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { jobDescriptionCreateDto } from './dto/jobDescription-create.dto';
import { jobDescriptionUpdateDto } from './dto/jobDescription-update.dto';
import { JobDescriptionService } from './job-description.service';

@Controller('job-description')
export class JobDescriptionController {
    constructor(private jdService: JobDescriptionService) { }


    @Post('/addjobdescription')
    storeJobDescription(@Body(ValidationPipe) jdCreateDto: jobDescriptionCreateDto) {
        return this.jdService.createJD(jdCreateDto);
    }

    @Get('/:jdId')
    getJobDescription(@Param('jdId', ParseIntPipe) jdId: number) {
        return this.jdService.showJDById(jdId);
    }

    @Patch('/:jdId')
    updateJobDescription(
      @Body(ValidationPipe) jdUpdateDto: jobDescriptionUpdateDto,
      @Param('jdId', ParseIntPipe) jdId: number) {

        return this.jdService.updateJD(jdUpdateDto, jdId);
    }

    @Delete('/:jdId')
    deletejobDescription(@Param('jdId', ParseIntPipe) jdId: number) {
        return this.jdService.deleteJD(jdId);
    }

    // @Get()
    // getAllJobDescriptions() {
    //     return this.jdService.getJD();
    // }
}
