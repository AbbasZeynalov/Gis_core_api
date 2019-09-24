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

            if(args.hasOwnProperty('offset')) {
                model.pagination.offset = args.offset;

            }

            if(args.hasOwnProperty('limit')) {
                model.pagination.limit = args.limit;
            }

            let data = await this.bll.getModules(model);

            return model.loadReturnDataWithPagination(data);

        } catch (e) {
            return this.catchError(e);
        }
    }
}
