import DepartmentService from "../services/DepartmentService.js";
import { DepapartmentRegistration } from "../utils/validations.js";

const RegisterDepartment = async (req, res) => {
    try {

        const { error } = DepapartmentRegistration(req.body);
        if (error) {
            return res.status(403).json({
                success: false,
                status: 403,
                message: error.details[0].message
            });
        }

        const departmentService = new DepartmentService();

        const response = await departmentService.registerDepartment(req.body);

        return res.status(response.status).json(response);

    } catch (e) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: "Department registration failed",
        })
    }
};

const GetAllDepartments = async (req, res) => {
    try {
        const departmentService = new DepartmentService();

        const response = await departmentService.getAllDepartments();

        return res.status(response.status).json(response);
    } catch (e) {
        return {
            success: false,
            message: "Internal server error"
        }
    }
}

export { RegisterDepartment, GetAllDepartments }