import { Controller, Get, Req, Post, Patch, Param, Delete} from '@nestjs/common';
import { Request } from 'express';
import { CandidateService } from './candidate.service';

@Controller('candidate')
export class CandidateController {

  constructor(private candService: CandidateService) {
  }

  @Get()
  getcandidates() {
    return this.candService.getC();
    // return "I am from candidate controller"
  }

  @Post()
  store(@Req() req: Request) {
    return this.candService.createC(req);
  }

  @Patch('/:candId')
  update(@Req() req: Request, @Param() param: {candId: string},) {
    return this.candService.updateC(req, param);
  }

  @Get('/:candId')
  getCandidateById(@Param() param: {candId: string}) {
    return this.candService.showCById(param);
  }

  @Delete('/:candId')
  deletecandidate(@Param() params: {candId: string}) {
    return this.candService.deleteC(params);
  }
}
