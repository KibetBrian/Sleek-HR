import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const GenerateTokens = async (user) => {
    try {
        const accessToken = jwt.sign({ userId: user.id, email: user.workEmail }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });

        const refreshToken = jwt.sign({ userId: user.id, email: user.workEmail }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });

        return Promise.resolve({ refreshToken, accessToken });
    } catch (e) {
        return Promise.reject(e);
    }
};
export { GenerateTokens };