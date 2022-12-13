import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const GenerateTokens = (user) => {
    try {
        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

        const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '3d' });

        return Promise.resolve({ refreshToken, accessToken });
    } catch (e) {
        return Promise.reject(e);
    }
};

const VerifyTokens = (token) => {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    
}

export { GenerateTokens };