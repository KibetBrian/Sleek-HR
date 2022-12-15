import { Router } from "express";
import { GetAllDepartments, RegisterDepartment, UpdateDepartment, UpdateDepartmentStatus } from "../controllers/Department.js";

const departmentRouter = Router();

departmentRouter.get('/all', GetAllDepartments);
departmentRouter.post('/add', RegisterDepartment);
departmentRouter.put('/update-status/:action/:name', UpdateDepartmentStatus);
departmentRouter.put('/update/:name', UpdateDepartment);

export default departmentRouter;

