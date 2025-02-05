import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Zone} from "../entities/zone.entity";
import {Repository} from "typeorm";

@Injectable()
export class ZoneService {

    constructor(
        @InjectRepository(Zone)
        private readonly zoneRepository: Repository<Zone>,
    ) {}

    async findAllZones(): Promise<Zone[]> {
        return await this.zoneRepository.find();
    }

    async findOneZone(id: string): Promise<Zone | null> {
        // @ts-ignore
        return await this.zoneRepository.findOne({ where: {id}})
    }
}
