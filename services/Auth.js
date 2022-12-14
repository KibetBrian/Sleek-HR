import Employee from "../models/Employee.js";
import { GenerateTokens } from "../utils/jwt.js";

class AuthService {
    constructor() {
        this.model = Employee;
    };

    async login(data) {
        try {
            const user = await this.model.findAll({ where: { workEmail: data.email } });
            if (user.length === 0) {
                return {
                    success: false,
                    status: 404,
                    message: "No such user found"
                }
            }

            if (user[0].password !== data.password) {
                return {
                    success: false,
                    status: 401,
                    message: "Wrong email, password or role"
                }
            };

            const tokens = await GenerateTokens(user[0].dataValues);
            return {
                success: true,
                status: 200,
                tokens
            }
        } catch (e) {
            console.log("Error", e)
            return {
                success: false,
                status: 500,
                message: "Login failed, try again later"
            }
        }
    }
};

export default AuthService;