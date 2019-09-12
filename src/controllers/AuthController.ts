import AuthBll from '../bll/AuthBll';
import BaseController from "./BaseController";
import LoginForm from "../entity/LoginForm";
import {User} from "../entity/user/User";
import Authentication from "../decorators/auth/Authentication";
import {IUser} from "../models/entity/IUser";
import {IContext} from "../models/graphql/IGraphql";
import {ILogin} from "../models/forms/auth/ILogin";
import Rbac from "../decorators/auth/Rbac";
import {AUTH_ENTITIES, AUTH_OPERATIONS} from "../config/constant";
import {getCustomRepository} from "typeorm";
import UserRepository from "../dal/UserRepository";

export default class AuthController extends BaseController {
    protected bll: AuthBll;

    constructor() {
        super();
        this.bll = new AuthBll(getCustomRepository(UserRepository));

        this.me = this.me.bind(this);
        this.actionLogin = this.actionLogin.bind(this);
    }

    @Authentication
    // @Rbac([2, 5])
    public async me(args: any, context: IContext): Promise<any> {

        try {

            return {
                id: 11,
                firstname: 'test',
                lastname: 'String',
                email: 'String',
                access_token: 'String'
            }

        } catch (e) {

            this.logger.error(e);
        }
    }

    public async actionLogin(args: ILogin, context: IContext) {

        try {
            let model = new LoginForm();

            model.load(args);

            this.validate(model, model.schema());

            return await this.bll.login(model);

        } catch (e) {
            return this.catchError(e);
        }
    }
}
