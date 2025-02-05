import {Controller, Get} from '@nestjs/common';
import {ZoneService} from "./zone.service";
import {Zone} from "../entities/zone.entity";

@Controller('zone')
export class ZoneController {
    constructor(private readonly zoneService: ZoneService) {}

    @Get()
    async findAllZones(): Promise<Zone[]> {
        return this.zoneService.findAllZones();
    }

    @Get()
    async findOneZone(id: string): Promise<Zone | null> {
        // @ts-ignore
        return this.zoneService.findOneZone();
    }
}
