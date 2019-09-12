import AuthController from "../../controllers/AuthController";

const GraphqlRoot = () => {

    const auth = new AuthController();

    return {
        me: auth.me,
        login: auth.actionLogin
    }
};



export default GraphqlRoot;
