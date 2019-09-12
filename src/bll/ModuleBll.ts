import ModuleRepository from "../dal/ModuleRepository";

export default class ModuleBll {
    public moduleDal: ModuleRepository

    constructor(ModuleRepository: ModuleRepository) {
        this.moduleDal = ModuleRepository;
    }
}
