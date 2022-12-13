import { Router } from "express";

const employeeRouter = Router();

employeeRouter.post('/register/basic',BasicDetailsEmployeeRegistration )

export default employeeRouter;

