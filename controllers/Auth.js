import AuthService from "../services/Auth";
import { LoginValidation } from "../utils/validations";

const Login = async (req, res) => {
    try {
        const { error } = LoginValidation(req.body);
        if (error) {
            return res.status(403).json({
                error: true,
                message: error.details[0].message
            });
        }

        const authService = new AuthService();

        const response = await authService.Login(req.body);

        return res.status(response.status).json(response);
        
    } catch (e) {

    }
};

export default Login;