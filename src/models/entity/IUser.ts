import {ON_OFF_STATUS} from "../../config/constant";
import {IUserGroup} from "./IUserGroup";
import {IEntityValidation} from "../validation/IEntity";
import {ICustomBaseEntity} from "./ICustomBaseEntity";

export interface IUser extends ICustomBaseEntity {
    username: string
    firstname: string
    lastname: string
    patronymic: string
    email: string
    password: string
    access_token?: string
}
