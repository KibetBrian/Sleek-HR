import SuperUsers from "../models/SuperUsers";
import { GenerateTokens } from "../utils/jwt";

class AuthService {
    constructor() {
        this.model = SuperUsers;
    };

    async Login(data) {
        let role;
        switch (data.role) {
            case "hr":
                role = hr;
                break;

            default:
                break;
        }

        const user = await SuperUsers.find({ email: data.email, role: data.role });
        if (user.length === 0) {
            return {
                success: false,
                status: 404,
                message: "No such user found"
            }
        }

        if (data.password !== user.password) {
            return {
                success: false,
                status: 401,
                message: "Wrong email or password"
            }
        }

        const tokens = await GenerateTokens(user);
        return {
            success: true,
            status: 404,
            tokens
        }
    }
};

export default AuthService;