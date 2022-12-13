"use strict"
import Branch from "../models/Branch.js";
import Corporate from "../models/Corporate.js";
import { DB_ERROR_CODES } from "../utils/utils.js";


class BranchService {
    constructor() {
        this.branch = Branch;
        this.errorCodes = DB_ERROR_CODES;
    };

    async RegisterBranch(data) {
        try {

            const corporate = await Corporate.findAll({ where: { name: data.corporateName } });
            if (corporate.length === 0) {
                return {
                    success: false,
                    status: 404,
                    corporate,
                    message: "No such corporate exists"
                }
            }

            const results = await Branch.create({ ...data, corporateId: corporate[0].id });
            if (results) {
                return {
                    success: true,
                    status: 201,
                    message: "Branch registered",
                    branchData: results
                }
            }
        } catch (e) {
            if (e.original.code === DB_ERROR_CODES.UCV) {
                return {
                    success: false,
                    status: 409,
                    message: "A branch with that name already exists"
                }
            }
        }
    }

    async getAllBranches() {
        try {
            const branches = await this.branch.findAll();

            return {
                success: true,
                status: 200,
                branches: branches
            };
        } catch (e) {
            return {
                success: false,
                status: 500,
                message: "Internal Server Error"
            }
        }
    }

}

export { BranchService }