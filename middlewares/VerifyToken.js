import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Employee from '../models/Employee.js';
dotenv.config();

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            status: 401,
            message: "Authorization token not found",
        })
    };
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).json({
            success: false,
            status: 401,
            message: "Invalid authorization token",
        })
    }
};

const authorize = (role) => {
    return async (req, res, next) => {
        const authHeader = req.headers['authorization'];

        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: "Authorization token not found"
            })
        };

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await Employee.findAll({ where: { workEmail: decoded.email } });
            if (user.length === 0) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: "User not found"
                });
            }

            const userRole = user[0].role;

            const isRoleCorrect = userRole === role;
            if (!(isRoleCorrect)) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "You are not authorized",
                })
            };

            next();
        } catch (e) {
            res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }
    }
}


export { auth, authorize }