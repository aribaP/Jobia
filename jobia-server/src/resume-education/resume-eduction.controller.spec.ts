import { Test, TestingModule } from '@nestjs/testing';
import { ResumeEductionController } from './resume-eduction.controller';

describe('ResumeEductionController', () => {
  let controller: ResumeEductionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeEductionController],
    }).compile();

    controller = module.get<ResumeEductionController>(ResumeEductionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
