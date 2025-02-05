import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Reservation} from "../entities/reservation.entity";
import {Trip} from "../entities/trip.entity";
import {User} from "../entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, Trip, User])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports: [ReservationsService],
})
export class ReservationsModule {}
