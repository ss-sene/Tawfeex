import { Test, TestingModule } from '@nestjs/testing';
import { MeetingStopService } from './meeting_stop.service';

describe('MeetingStopService', () => {
  let service: MeetingStopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingStopService],
    }).compile();

    service = module.get<MeetingStopService>(MeetingStopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
