import {EntityRepository, Repository} from "typeorm";
import {Module} from "../entity/module/Module";
import {IModule} from "../models/entity/IModule";
import {ON_OFF_STATUS} from "../config/constant";

@EntityRepository(Module)
export default class ModuleRepository extends Repository<IModule> {
    async findAll(): Promise<IModule[]> {

        return await this.find({
                active: ON_OFF_STATUS.ON
            }
        ) || [] as IModule[];
    }

}
