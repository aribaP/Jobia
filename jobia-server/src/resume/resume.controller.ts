import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { resumeCreateDto } from './dto/resume-create.dto';
import { resumeUpdateDto } from './dto/resume-update.dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
    constructor(private resService: ResumeService) {}

    @Get()
    getresumes() {
      return this.resService.getR();
      // return "I am from resume controller"
    }
    
    @Post()
    store(@Body() resCreateDto: resumeCreateDto){

        return this.resService.createR(resCreateDto);
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
}
