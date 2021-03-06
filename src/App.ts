import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import {createConnection} from "typeorm";
import GraphqlHttp from "./graphql/root/GraphqlHttp";
import {Module} from "./entity/module/Module";
import {ModuleVersion} from "./entity/module/ModuleVersion";
import {User} from "./entity/user/User";
const path = require('path');

class App {

    public app: express.Application;

    constructor() {
        this.app = express();

        this.init();
    }

    public async init() {

        this.config();

        // @ts-ignore
        // let appDir = path.dirname(require.main.filename);

        await createConnection({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "root",
            "password": "",
            "database": "gis_core",
            "synchronize": true,
            "logging": false,
            "entities": [
                // appDir+"/entity/**/*"
                Module, ModuleVersion, User
            ],
            "migrations": [
                "../migration/*"
            ],
            "subscribers": [
                "../subscriber/*"
            ],
            "cli": {
                "migrationsDir": "src/migration"
            }
        });

        this.app.use('/graphql', cors(), GraphqlHttp());
    }

    private config(): void {

        this.app.use(helmet());

        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Content-Type");
            next();
        });

        this.app.use(bodyParser.json());   // support application/json type post data

        this.app.use(bodyParser.urlencoded({extended: false}));  //support application/x-www-form-urlencoded post data
    }
}

export default new App().app;
