import { Controller, Get, Req, Post, Patch, Param, Delete, Body, ParseIntPipe} from '@nestjs/common';
import { Request } from 'express';
import { CandidateService } from './candidate.service';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';

@Controller('candidate')
export class CandidateController {

    constructor(private candService: CandidateService) {}

    @Get()
    getcandidates() {
      return this.candService.getC();
      // return "I am from candidate controller"
    }

    @Post()
    store(@Body() candCreateDto: candidateCreateDto){

        return this.candService.createC(candCreateDto);
    }

    @Patch('/:candId')
    update(
      @Body() candUpdateDto: candidateUpdateDto,
      @Param('candId', ParseIntPipe) candId: number) {
    
      return this.candService.updateC(candUpdateDto, candId);
    }
    @Get('/:candId')
    getCandidateById(@Param('candId') candId: number) {
      return this.candService.showCById(candId);
    }

    // @Get('/:candName')
    // getCandidateByName(@Param('candName') candName: string) {
    //   return this.candService.showCByName(candName);
    // }

    @Delete('/:candId')
    deletecandidate(@Param('candId', ParseIntPipe) candId: number) {
      return this.candService.deleteC(candId);
    }
}
