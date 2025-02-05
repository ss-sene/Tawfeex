import { Module } from '@nestjs/common';
import { MeetingStopService } from './meeting_stop.service';
import { MeetingStopController } from './meeting_stop.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MeetingStop} from "../entities/meeting_stop.entity";
import {Zone} from "../entities/zone.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MeetingStop, Zone])],
  providers: [MeetingStopService],
  controllers: [MeetingStopController],
  exports: [MeetingStopService],
})
export class MeetingStopModule {}
