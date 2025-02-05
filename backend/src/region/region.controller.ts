import {Controller, Get, Param} from '@nestjs/common';
import {RegionService} from "./region.service";
import {Region} from "../entities/region.entity";

@Controller('region')
export class RegionController {
    constructor(private readonly regionService: RegionService) {}

    @Get()
    async findAll(): Promise<Region[]> {
        return this.regionService.findAllRegions();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Region | null> {
        return this.regionService.findOneRegion(id);
    }
}
