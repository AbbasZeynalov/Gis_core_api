import BaseController from "./BaseController";
import {IContext} from "../models/graphql/IGraphql";
import ModuleBll from "../bll/ModuleBll";
import {getCustomRepository} from "typeorm";
import ModuleRepository from "../dal/ModuleRepository";

export default class ModuleController extends BaseController {
    protected bll: ModuleBll;
    protected repository: ModuleRepository;

    constructor() {
        super();
        this.bll = new ModuleBll(getCustomRepository(ModuleRepository));
        this.repository = getCustomRepository(ModuleRepository);

        this.getModules = this.getModules.bind(this);
    }

    public async getModules(args: any, context: IContext) {
        try {

            return await this.repository.findAll();

        } catch (e) {
            return this.catchError(e);
        }
    }
}
