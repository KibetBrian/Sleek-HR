import { Router } from "express";
import { auth, authorize } from "../middlewares/VerifyToken";

const employeeRouter = Router();

employeeRouter.post('/register/basic',auth, authorize(["read", "create", "update", "delete"], ["hr"]), BasicDetailsEmployeeRegistration )

export default employeeRouter;

