import { Router } from "express";
import { GetAllDepartments, RegisterDepartment, UpdateDepartmentStatus } from "../controllers/Department.js";

const departmentRouter = Router();

departmentRouter.get('/all', GetAllDepartments);
departmentRouter.put('/update-status/:action/:name', UpdateDepartmentStatus)
departmentRouter.post('/register', RegisterDepartment);

export default departmentRouter;

