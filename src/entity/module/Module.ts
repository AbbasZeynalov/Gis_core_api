import {
    Column,
    Entity, Generated, OneToMany, PrimaryGeneratedColumn,
} from "typeorm";
import {CustomBaseEntity} from "../CustomBaseEntity";
import {IModule} from "../../models/entity/IModule";
import {ModuleVersion} from "./ModuleVersion";

@Entity()
export class Module extends CustomBaseEntity implements IModule {

    constructor(id?: number) {
        super();
        id && (this.id = id);
    }

    @Column()
    name: string;

    @Column()
    uuid: string;

    @Column()
    git_deploy_token_username: string;

    @Column()
    git_deploy_token_password: string;

    @Column()
    url: string;

    @OneToMany(type => ModuleVersion, moduleVersion => moduleVersion.module)
    version: ModuleVersion;

    public loadReturnDataWithPagination(data: any) {

        return {
            items: data[0],
            totalCount: data[1]
        }
    }

}

