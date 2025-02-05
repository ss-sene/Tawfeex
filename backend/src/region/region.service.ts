import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {Region} from "../entities/region.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class RegionService {

    constructor(
        @InjectRepository(Region)
        private readonly regionRepository: Repository<Region>,
    ) {}

    async findAllRegions(): Promise<Region[]> {
        return await this.regionRepository.find({ relations: ["zones"] });
    }

    async findOneRegion(id: string): Promise<Region | null> {
        // @ts-ignore
        return await this.regionRepository.findOne({where: {id}});
    }
}
