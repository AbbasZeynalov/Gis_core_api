import ModuleRepository from "../dal/ModuleRepository";
import {IModule} from "../models/entity/IModule";

export default class ModuleBll {
    public moduleDal: ModuleRepository

    constructor(ModuleRepository: ModuleRepository) {
        this.moduleDal = ModuleRepository;
    }

    public getModules(model: IModule): Promise<IModule[]> {

        return this.moduleDal.find({
            skip: model.pagination.offset,
            take: model.pagination.limit
        });
    }
}
