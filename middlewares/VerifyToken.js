import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Previdege from '../models/Previledge';
import Employee from '../models/Employee';
dotenv.config();

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
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
        return res.status(401).json("Invalid authorization token")
    }
};

const authorize = async (permisions, roles) => {
    return async () => {
        const token = req.token('x-auth-token');
        if (!token) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: "Authorization token not found"
            })
        };
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await Previdege.findAll({ include: Employee }, { where: { id: decoded.id } });
            if (user.length === 0) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: "User not found"
                });
            }

            const userRoles = user[0].roles;
            const userPermisions = user[0].permisions;

            const isRoleCorrect = roles.every((r) => {
                return roles.includes(r);
            });

            const isPermissionsCorrect = permisions.every((p) => {
                return roles.includes(p);
            });

            if (!(isRoleCorrect && isPermissionsCorrect)) {
                return res.status(400).json({
                    success: false,
                    status: 400,
                    message: "You are not authorized",
                })
            };

            next();
        } catch (e) {

        }
    }
}


export { auth, authorize }