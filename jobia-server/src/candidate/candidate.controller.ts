import { Controller, Get, Req, Post, Patch, Param, Delete, Body, ParseIntPipe, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CandidateService } from './candidate.service';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';

@Controller('candidate')
export class CandidateController {

    constructor(private candService: CandidateService) {}

    //  @UseGuards(AuthGuard('jwt'))
    @Get()
    getcandidates() {
      return this.candService.getC();
      // return "I am from candidate controller"
    }

    //  @UseGuards(AuthGuard('jwt'))
    @Post()
    store(@Body() candCreateDto: candidateCreateDto){
        return this.candService.createC(candCreateDto);
    }

    //  @UseGuards(AuthGuard('jwt'))
    @Patch('/:candId')
    update(
      @Body() candUpdateDto: candidateUpdateDto,
      @Param('candId', ParseIntPipe) candId: number) {
    
      return this.candService.updateC(candUpdateDto, candId);
    }

    //  @UseGuards(AuthGuard('jwt'))
    @Get('/:candId')
    getCandidateById(@Param('candId') candId: number) {
      return this.candService.showCById(candId);
    }

    //  @UseGuards(AuthGuard('jwt'))
    @Get(':candEmail')
    getCandidateByEmail(@Param('candEmail') candEmail: string) {
      return this.candService.showCByEmail(candEmail);
    }

    //  @UseGuards(AuthGuard('jwt'))
    @Delete('/:candId')
    deletecandidate(@Param('candId', ParseIntPipe) candId: number) {
      return this.candService.deleteC(candId);
    }
}
