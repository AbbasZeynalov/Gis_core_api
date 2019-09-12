import {
    Column,
    Entity,
} from "typeorm";
import {CustomBaseEntity} from "../CustomBaseEntity";
import {IModule} from "../../models/entity/IModule";

@Entity()
export class Module extends CustomBaseEntity implements IModule {

    constructor(id?: number) {
        super();
        id && (this.id = id);
    }

    @Column()
    name: string;

    @Column()
    url: string;

}

