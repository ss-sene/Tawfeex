import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn
} from 'typeorm';
import { Trip } from './trip.entity';
import {Zone} from "./zone.entity";

@Entity('meeting_stops')
export class MeetingStop {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nom: string;

    @Column({ nullable: true })
    adresse: string;

    @Column('decimal', { precision: 9, scale: 6 })
    latitude: number;

    @Column('decimal', { precision: 9, scale: 6 })
    longitude: number;

    @ManyToOne(() => Zone, zone => zone.trip_stops)
    @JoinColumn({ name: 'zone_id' })
    zone: Zone;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
