import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn, JoinColumn
} from 'typeorm';
import { User } from './user.entity';
import { Reservation } from './reservation.entity';

@Entity("trips")
export class Trip {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    depart: string;

    @Column()
    destination: string;

    @Column({ type: 'timestamp' })
    date_depart: Date;

    @Column({ type: 'time' })
    heure_depart: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    prix: number;

    @ManyToOne(() => User, user => user.trips)
    @JoinColumn({ name: "conducteur_id"})
    conducteur: User;

    @OneToMany(() => Reservation, reservation => reservation.trip)
    reservations: Reservation[];
}
