import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { Trip } from '../entities/trip.entity';
import { User } from '../entities/user.entity'; // Pour accéder au conducteur, si besoin

@Module({
  imports: [TypeOrmModule.forFeature([Trip, User])],
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService],
})
export class TripsModule {}
