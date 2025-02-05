import { Test, TestingModule } from '@nestjs/testing';
import { MeetingStopController } from './meeting_stop.controller';

describe('MeetingStopController', () => {
  let controller: MeetingStopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingStopController],
    }).compile();

    controller = module.get<MeetingStopController>(MeetingStopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
