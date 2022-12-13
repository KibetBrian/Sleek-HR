import DepartmentService from "../services/DepartmentService.js";
import { DepapartmentRegistration, UpdateDepartmentValidation } from "../utils/validations.js";

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
};

const UpdateDepartmentStatus = async (req, res) => {
    try {
        const departmentName = req.param('name');
        const action = req.param('action');

        const departmentService = new DepartmentService();

        const response = await departmentService.activateOrDeactivateDepartment(action, departmentName);

        return res.status(response.status).json(response);

    } catch (e) {
        return res.status(500).json('Internal server error')
    }
};

const UpdateDepartment = async (req, res) => {
    try {
        const { error } = UpdateDepartmentValidation(req.body);
        if (error) {
            if (error) {
                return res.status(422).json({
                    success: false,
                    status: 403,
                    message: error.details[0].message
                });
            }
        }

        const departmentService = new DepartmentService();

        const departmentName = req.param('name');

        const response = await departmentService.UpdateDepartment(departmentName, req.body);

        return res.status(response.status).json(response);

    } catch (e) {
        return response.status(500).json("Internal Server error");
    }
}

export { RegisterDepartment, GetAllDepartments, UpdateDepartmentStatus, UpdateDepartment }