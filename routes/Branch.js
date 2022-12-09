import { Router } from "express";
import { RegisterBranchController } from "../controllers/Branch.js"

const branchRoute = Router();

branchRoute.post('/register', RegisterBranchController);

export default branchRoute;

