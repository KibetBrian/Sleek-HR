import { Router } from 'express';
import Login from '../controllers/Auth';

const authRouter = Router();

authRouter.get("/login", Login);

export default authRouter;