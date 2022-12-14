import AuthService from "../services/Auth.js";
import { LoginValidation } from "../utils/validations.js";

const Login = async (req, res) => {
    try {
        const { error } = LoginValidation(req.body);
        if (error) {
            return res.status(400).json({
                error: true,
                message: error.details[0].message
            });
        }

        const authService = new AuthService();

        const response = await authService.login(req.body);

        return res.status(response.status).json(response);

    } catch (e) {
        res.status(500).json("Internal server error")
    }
};

export default Login;