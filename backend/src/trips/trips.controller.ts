import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from '../entities/trip.entity';

@Controller('trips')
export class TripsController {
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    async create(@Body() tripData: Partial<Trip>): Promise<Trip> {
        return this.tripsService.createTrip(tripData);
    }

    @Get()
    async findAll(): Promise<Trip[]> {
        return this.tripsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Trip> {
        return this.tripsService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateData: Partial<Trip>,
    ): Promise<Trip> {
        return this.tripsService.updateTrip(id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.tripsService.removeTrip(id);
    }
}
