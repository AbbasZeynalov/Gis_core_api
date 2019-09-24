import {
    Column,
    Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from "typeorm";
import {Module} from "./Module";

@Entity()
export class ModuleVersion {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Module, module => module.version)
    @JoinColumn({ name: "module_id" })
    module: Module;

    @Column()
    version: string;

    constructor(id?: number) {
        id && (this.id = id);
    }
}

