import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Trip } from './trip.entity';
import { Reservation } from './reservation.entity';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column({ unique: true })
    telephone: string;

    @Column()
    mot_de_passe: string;

    @Column({ type: 'enum', enum: ['passager', 'conducteur'] })
    role: 'passager' | 'conducteur';

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @OneToMany(() => Trip, trip => trip.conducteur)
    trips: Trip[];

    @OneToMany(() => Reservation, reservation => reservation.passager)
    reservations: Reservation[];
}
