import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn
} from 'typeorm';
import { User } from './user.entity';
import { Trip } from './trip.entity';

@Entity("reservations")
export class Reservation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.reservations)
    @JoinColumn({ name: 'passager_id' })
    passager: User;

    @ManyToOne(() => Trip, trip => trip.reservations)
    @JoinColumn({ name: 'trip_id' })
    trip: Trip;

    @Column({ default: 'confirmée' })
    statut: 'confirmée' | 'annulée';

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
