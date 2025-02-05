import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from '../entities/trip.entity';

@Injectable()
export class TripsService {
    constructor(
        @InjectRepository(Trip)
        private readonly tripRepository: Repository<Trip>,
    ) {}

    async createTrip(tripData: Partial<Trip>): Promise<Trip> {
        const trip = this.tripRepository.create(tripData);
        return await this.tripRepository.save(trip);
    }

    async findAll(): Promise<Trip[]> {
        return await this.tripRepository.find({ relations: ['conducteur'] });
    }

    async findOne(id: string): Promise<Trip> {
        const trip = await this.tripRepository.findOne({ where: { id }, relations: ['conducteur', 'reservations'] });
        if (!trip) {
            throw new NotFoundException(`Trip with id ${id} not found`);
        }
        return trip;
    }

    async updateTrip(id: string, updateData: Partial<Trip>): Promise<Trip> {
        await this.tripRepository.update(id, updateData);
        return this.findOne(id);
    }

    async removeTrip(id: string): Promise<void> {
        await this.tripRepository.delete(id);
    }
}
