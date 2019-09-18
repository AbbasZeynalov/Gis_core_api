import BaseController from "./BaseController";
import {IContext} from "../models/graphql/IGraphql";
import ModuleBll from "../bll/ModuleBll";
import {getCustomRepository} from "typeorm";
import ModuleRepository from "../dal/ModuleRepository";
import {Module} from "../entity/module/Module";

export default class ModuleController extends BaseController {
    protected bll: ModuleBll;

    constructor() {
        super();
        this.bll = new ModuleBll(getCustomRepository(ModuleRepository));

        this.getModules = this.getModules.bind(this);
    }

    public async getModules(args: any, context: IContext) {
        try {

            let model = new Module();

            if(args.hasOwnProperty('offset') && args.hasOwnProperty('limit')) {

                model.pagination.offset = args.offset;
                model.pagination.limit = args.limit;
            }

            return await this.bll.getModules(model);

        } catch (e) {
            return this.catchError(e);
        }
    }
}
