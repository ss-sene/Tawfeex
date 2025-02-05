import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Region} from "./region.entity";
import {MeetingStop} from "./meeting_stop.entity";


@Entity('zones')
export class Zone {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nom: string;

    @ManyToOne(() => Region, region => region.zones)
    @JoinColumn({ name: 'region_id' })
    region: Region;

    @OneToMany(() => MeetingStop, meeting_stop => meeting_stop.zone)
    trip_stops: MeetingStop[];

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
