import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { resumeCreateDto } from './dto/resume-create.dto';
import { resumeUpdateDto } from './dto/resume-update.dto';
import { resumeCompleteCreateDto } from './dto/resume-wholeCreate.dto';
import { resume } from './entity/resume.entity';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private resService: ResumeService) { }

  @Get()
  getresumes() {
    return this.resService.getR();
    // return "I am from resume controller"
  }

  @Post()
  store(@Body() resCreateDto: resumeCreateDto) {

    return this.resService.createR(resCreateDto);
  }

  @Post('/whole')
  storeAll(@Body() resCreateDto: resumeCompleteCreateDto) {
    return this.resService.createWholeResume(resCreateDto);
  }


  @Patch('/:resId')
  update(
    @Body() resUpdateDto: resumeUpdateDto,
    @Param('resId', ParseIntPipe) resId: number) {

    return this.resService.updateR(resUpdateDto, resId);
  }

  @Get('/:resId')
  getresumeById(@Param('resId') resId: number) {
    return this.resService.showRById(resId);
  }

  @Delete('/:resId')
  deleteresume(@Param('resId', ParseIntPipe) resId: number) {
    return this.resService.deleteR(resId);
  }

  @Get('/resumeexperience/:resId')
  getExperienceByResume(@Param('resId', ParseIntPipe) resId: number) {
    return this.resService.showResumeExperienceByResumeId(resId);
  }

  @Get('/resumeeducation/:resId')
  getEducationByResume(@Param('resId', ParseIntPipe) resId: number) {
    return this.resService.showResumeEducationByResumeId(resId);
  }

  @Get('/resumprojects/:resId')
  getProjectByResume(@Param('resId', ParseIntPipe) resId: number) {
    return this.resService.showResumeProjectByResumeId(resId);
  }

  @Get('/wholeresume/:resId')
  getWholeResume(@Param('resId', ParseIntPipe) resId: number) {
    return this.resService.showCompleteResume(resId);
  }


}


// {
//   "careerObjective": "My career Objective",
//   "position": "My Position",
//   "skills": "My skills",
//   "linkedIn": "My linkedin link",
//   "gitHub": "My github Link",
//   "hobbiesInterest": "My hibbies and interest",
//   "candFK": 2
// }