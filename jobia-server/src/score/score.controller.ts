import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
    constructor(private scoreService: ScoreService) { }

    @Get('/:jdId')
    getWholeResume(@Param('jdId', ParseIntPipe) jdId: number) {
      return this.scoreService.newJobDescriptionIsAdded(jdId);
    }
}
