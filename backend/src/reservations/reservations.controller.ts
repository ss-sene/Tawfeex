import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ReservationsService} from "./reservations.service";
import {Reservation} from "../entities/reservation.entity";

@Controller("reservations")
export class ReservationsController {
    constructor(private readonly reservationService: ReservationsService) {}

    @Post()
    async create(@Body() reservationData: Partial<Reservation>): Promise<Reservation> {
        return this.reservationService.createReservation(reservationData);
    }

    @Get()
    async findAll(): Promise<Reservation[]> {
        return this.reservationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Reservation> {
        return this.reservationService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateData: Partial<Reservation>,
    ) {
        return this.reservationService.updateReservation(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Reservation> {
        return this.reservationService.deleteReservation(id);
    }
}