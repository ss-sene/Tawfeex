import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Zone} from "./zone.entity";


@Entity('regions')
export class Region {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nom: string;

    @OneToMany(() => Zone, zone => zone.region)
    zones: Zone[];

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}