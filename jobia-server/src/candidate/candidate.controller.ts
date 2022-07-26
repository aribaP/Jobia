import { Controller, Get, Req, Post, Patch, Param, Delete, Body} from '@nestjs/common';
import { Request } from 'express';
import { CandidateService } from './candidate.service';
import { candidateSignupDto } from './dto/candidate-signup.dto';

@Controller('candidate')
export class CandidateController {

  constructor(private candService: CandidateService) {}

  @Get()
  getcandidates() {
    return this.candService.getC();
    // return "I am from candidate controller"
  }

  @Post()
  store(@Body() candSignupDto: candidateSignupDto){

      return this.candService.createC(candSignupDto);
  }

  // @Patch('/:candId')
  // update(@Req() req: Request, @Param() param: {candId: number},) {
  //   return this.candService.updateC(req, param);
  // }

  // @Get('/:candId')
  // getCandidateById(@Param() param: {candId: number}) {
  //   return this.candService.showCById(param);
  // }

  // @Delete('/:candId')
  // deletecandidate(@Param() params: {candId: number}) {
  //   return this.candService.deleteC(params);
  // }
}
