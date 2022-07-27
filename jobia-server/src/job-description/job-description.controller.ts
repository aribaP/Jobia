import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { jobDescriptionCreateDto } from './dto/jobDescription-create.dto';
import { jobDescriptionUpdateDto } from './dto/jobDescription-update.dto';
import { JobDescriptionService } from './job-description.service';

@Controller('job-description')
export class JobDescriptionController {
    constructor(private jdService: JobDescriptionService) {}

    @Get()
    getjobDescriptions() {
      return this.jdService.getJD();
      // return "I am from jobDescription controller"
    }

    @Post()
    store(@Body() jdCreateDto: jobDescriptionCreateDto){

        return this.jdService.createJD(jdCreateDto);
    }

    @Patch('/:jdId')
    update(
      @Body() jdUpdateDto: jobDescriptionUpdateDto,
      @Param('jdId', ParseIntPipe) jdId: number) {
    
      return this.jdService.updateJD(jdUpdateDto, jdId);
    }
    
    @Get('/:jdId')
    getjobDescriptionById(@Param('jdId') jdId: number) {
      return this.jdService.showJDById(jdId);
    }

    // @Get('/:jdName')
    // getjobDescriptionByName(@Param('jdName') jdName: string) {
    //   return this.jdService.showCByName(jdName);
    // }

    @Delete('/:jdId')
    deletejobDescription(@Param('jdId', ParseIntPipe) jdId: number) {
      return this.jdService.deleteJD(jdId);
    }
}
