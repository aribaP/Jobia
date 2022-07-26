import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { resumeExperienceCreateDto } from './dto/resumeExperience-create.dto';
import { resumeExperienceUpdateDto } from './dto/resumeExperience-update.dto';
import { ResumeExperienceService } from './resume-experience.service';

@Controller('resume-experience')
export class ResumeExperienceController {
    constructor(private ResExpService: ResumeExperienceService) {}

    @Get()
    getresumeExperiences() {
        return this.ResExpService.getResExp();
        // return "I am from resumeExperience controller"
    }

    @Post()
    store(@Body() ResExpCreateDto: resumeExperienceCreateDto){

        return this.ResExpService.createResExp(ResExpCreateDto);
    }

    @Patch('/:expId')
    update(
        @Body() ResExpUpdateDto: resumeExperienceUpdateDto,
        @Param('expId', ParseIntPipe) expId: number) {
        return this.ResExpService.updateResExp(ResExpUpdateDto, expId);
    }
    
    @Get('/:expId')
    getresumeExperienceById(@Param('expId') expId: number) {
        return this.ResExpService.showResExpById(expId);
    }

    @Delete('/:expId')
    deleteresumeExperience(@Param('expId', ParseIntPipe) expId: number) {
        return this.ResExpService.deleteResExp(expId);
    }
}
