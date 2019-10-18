import {ICustomBaseEntity} from "./ICustomBaseEntity";

export interface IModule extends ICustomBaseEntity{
    name: string
    uuid: string
    url: string
}
