import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MeetingStop} from "../entities/meeting_stop.entity";
import {Repository} from "typeorm";

@Injectable()
export class MeetingStopService {

    constructor(
        @InjectRepository(MeetingStop)
        private readonly meetingStopRepository: Repository<MeetingStop>,
    ) {}

    async findAll(): Promise<MeetingStop[]> {
        return await this.meetingStopRepository.find();
    }

    async findOne(id: string): Promise<MeetingStop | null> {
        return await this.meetingStopRepository.findOne({ where: { id: id } });
    }
}
