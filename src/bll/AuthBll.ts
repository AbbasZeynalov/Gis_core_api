import UserRepository from "../dal/UserRepository";
import errorCodes from '../utils/response/errors';
import {IUser} from "../models/entity/IUser";
import UserError from "../utils/UserError";
import * as bcrypt from 'bcryptjs';
import {ILogin} from "../models/forms/auth/ILogin";

const jwt = require('jsonwebtoken');

export default class AuthBll {
    public userDal: UserRepository;

    constructor(UserRepository: UserRepository) {
        this.userDal = UserRepository;
    }

    public async login(model: ILogin): Promise<IUser> {
        let user: IUser = await this.userDal.findByUserName(model.username);


        if (Object.keys(user).length === 0)
            throw new UserError(errorCodes.USER_NOT_FOUND)

        let passwordIsValid = bcrypt.compareSync(model.password, user.password);

        if (!passwordIsValid)
            throw new UserError(errorCodes.INVALID_AUTHENTICATION_CREDENTIALS)

        let payload = ({
            id: user.id
        });

        user.access_token = await jwt.sign(payload, process.env.AUTH_SECRET, {
            expiresIn: 30 * 86400 // expires in 30 days
        });

        return user;
    }

    public async me(model: IUser): Promise<IUser> {

        let user = await this.userDal.findByUserName(model.username);

        return user;
    }
}
