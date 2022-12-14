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

const authorize = (permissionsAllowed, rolesAllowed) => {
    return async (req, res, next) => {
        try {

            const user = await Employee.findAll({ where: { workEmail: req.user.email } });
            if (user.length === 0) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: "User not found"
                });
            }

            const userRoles = user[0].roles;
            const userPermissions = user[0].permisions;

            const isPermissionsCorrect = permissionsAllowed.every((p) => {
                return userPermissions.includes(p);
            });

            const isRolesCorrect = rolesAllowed.every((r) => {
                return userRoles.includes(r);
            });

            if (!(isPermissionsCorrect && isRolesCorrect)) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "You are not authorized",
                })
            };

            next();
        } catch (e) {
            console.log("Error", e)
            res.status(500).json({
                success: false,
                status: 500,
                message: "Internal server error"
            })
        }
    }
}


export { auth, authorize }