import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from "typeorm";
import {Reservation} from "../entities/reservation.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ReservationsService {

    constructor(
        @InjectRepository(Reservation)
        private readonly reservationRepository: Repository<Reservation>,
    ) {}

    async createReservation(reservationData: Partial<Reservation>): Promise<Reservation> {
        const reservation = await this.reservationRepository.create(reservationData);
        return this.reservationRepository.save(reservation);
    }

    async findAll(): Promise<Reservation[]> {
        return await this.reservationRepository.find({relations: ['passager', 'trip']});
    }

    async findOne(id: string): Promise<Reservation> {
        const reservation = await this.reservationRepository.findOne({ where: { id }, relations: ['passager', 'trip'] });

        if (!reservation) {
            throw new NotFoundException(`Reservation with id ${id} not found`);
        }

        return reservation;
    }

    async updateReservation(id: string, updateData: Partial<Reservation>): Promise<Reservation> {
        await this.reservationRepository.update(id, updateData);
        return this.findOne(id);
    }

    // @ts-ignore
    async deleteReservation(id: string): Promise<Reservation> {
        await this.reservationRepository.delete(id);
    }
}
