import ModuleRepository from "../dal/ModuleRepository";
import {IModule} from "../models/entity/IModule";

export default class ModuleBll {
    public moduleDal: ModuleRepository

    constructor(ModuleRepository: ModuleRepository) {
        this.moduleDal = ModuleRepository;
    }

    public async getModules(model: IModule): Promise<[IModule[], number]> {

        return await this.moduleDal.findAndCount({
            skip: model.pagination.offset,
            take: model.pagination.limit,
            relations: ["version"]
        });
    }
}
