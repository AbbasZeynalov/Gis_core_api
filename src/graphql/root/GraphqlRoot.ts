import AuthController from "../../controllers/AuthController";
import ModuleController from "../../controllers/ModuleController";

const GraphqlRoot = () => {

    const auth = new AuthController();
    const module = new ModuleController();

    return {
        me: auth.me,
        login: auth.actionLogin,
        modules: module.getModules
    }
};



export default GraphqlRoot;
