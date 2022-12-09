"use strict"
import Branch from "../models/Branch.js";
import { DB_ERROR_CODES } from "../utils/utils.js";

const RegisterBranchService = async (data) => {
    try {
        const results = await Branch.create(data);
        if (results) {
            return {
                success: false,
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
                message: "Choose a branch with different name"
            }
        }
    }
};

export { RegisterBranchService }