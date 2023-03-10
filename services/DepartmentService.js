import Branch from "../models/Branch.js";
import Department from "../models/Department.js";
import { DB_ERROR_CODES } from '../utils/utils.js'

class DepartmentService {
    constructor() {
        this.departmentModel = Department;
    }

    async registerDepartment(data) {
        try {
            const branch = await Branch.findAll({ name: data.branchName });
            if (branch.length === 0) {
                return {
                    success: false,
                    status: 404,
                    message: "No branch with such name"
                }
            }

            const response = await this.departmentModel.create({ ...data, branchId: branch[0].id });
            if (response) {
                return {
                    success: true,
                    status: 201,
                    message: "Department registered",
                    branchData: response
                }
            }

        } catch (e) {
            if (e.original.code === DB_ERROR_CODES.UCV) {
                return {
                    success: false,
                    status: 409,
                    message: "A department with that name already exists"
                }
            }

            return {
                success: false,
                status: 500,
                message: "Department registration failed"
            }
        }
    }

    async getAllDepartments() {
        try {

            const departments = await this.departmentModel.findAll();
            if (departments) {
                return {
                    success: true,
                    status: 200,
                    departments
                }
            }

        } catch (e) {
            return {
                success: false,
                status: 500,
                message: "Internal Server Error"
            }
        }
    }

    async activateOrDeactivateDepartment(action, departmentName) {
        let toUpdate;
        switch (action) {
            case 'activate':
                toUpdate = true;
                break;
            case 'deactivate':
                toUpdate = false;
                break;
            default:
                return {
                    success: false,
                    status: 403,
                    message: "Invalid action"
                }
        };

        try {
            await this.departmentModel.update({ active: toUpdate }, { where: { name: departmentName } });
            return {
                success: true,
                status: 200,
                message: "Department updated"
            }
        } catch (e) {
            return {
                success: false,
                status: 500,
                message: "Internal server error"
            }
        }
    };

    async UpdateDepartment(departmentName, departmentData) {
        try {

            const exists = await this.departmentModel.findAll({ where: { name: departmentName } });
            if (exists.length === 0) {
                return {
                    success: false,
                    status: 404,
                    message: "No such department exists"
                }
            }

            const response = await this.departmentModel.update(departmentData, { where: { name: departmentName } });
            return {
                success: true,
                status: 200,
                message: "Department Updated"
            }
        } catch (e) {
            return {
                success: false,
                status: 500,
                error: e,
                departmentData,
                message: "Failed to update department"
            }
        }
    };

}

export default DepartmentService;