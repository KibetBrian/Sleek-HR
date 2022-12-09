import { Router } from "express";
import { BranchRegistration } from "../controllers/Branch.js"

const branchRoute = Router();

branchRoute.post('/register', BranchRegistration);

export default branchRoute;

