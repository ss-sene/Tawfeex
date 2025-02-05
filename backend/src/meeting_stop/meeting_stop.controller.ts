import {Controller, Get, Param} from '@nestjs/common';
import {MeetingStopService} from "./meeting_stop.service";
import {MeetingStop} from "../entities/meeting_stop.entity";

@Controller('meeting-stop')
export class MeetingStopController {

    constructor(private readonly meetingStopService: MeetingStopService) {}

    @Get()
    async findAllMeetingStops(): Promise<MeetingStop[]> {
        return await this.meetingStopService.findAll();
    }

    @Get(':id')
    async findOneMeetingStop(@Param('id') id: string): Promise<MeetingStop | null> {
        return await this.meetingStopService.findOne(id)
    }
}
