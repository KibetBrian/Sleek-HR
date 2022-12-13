import { Router } from "express";
import { GetAllBranches, RegisterBranchController } from "../controllers/Branch.js"

const branchRoute = Router();

branchRoute.get('/all', GetAllBranches);
branchRoute.post('/register', RegisterBranchController);

export default branchRoute;

