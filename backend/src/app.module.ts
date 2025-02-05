import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TripsModule } from './trips/trips.module';
import { ReservationsModule } from './reservations/reservations.module';
import { RegionModule } from './region/region.module';
import { ZoneModule } from './zone/zone.module';
import { MeetingStopModule } from './meeting_stop/meeting_stop.module';
// Importer les modules spécifiques (par exemple, UsersModule, TripsModule, etc.) au fur et à mesure

/*@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})*/

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Pour rendre les variables d'environnement accessibles partout
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true, // Charge automatiquement les entités
      synchronize: true, // À désactiver en production
    }),
    UsersModule,
    TripsModule,
    ReservationsModule,
    RegionModule,
    ZoneModule,
    MeetingStopModule,
    // Ajoute ici tes modules (UsersModule, TripsModule, ReservationsModule, etc.)
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
