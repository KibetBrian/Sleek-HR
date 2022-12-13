import { Router } from "express";
import { GetAllDepartments, RegisterDepartment } from "../controllers/Department.js";

const departmentRouter = Router();

departmentRouter.get('/all', GetAllDepartments);
departmentRouter.post('/register', RegisterDepartment);

export default departmentRouter;

