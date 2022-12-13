import { BranchService } from "../services/BranchService.js";
import { BranchBodyValidation } from "../utils/validations.js";

const RegisterBranchController = async (req, res) => {
    try {
        const { error } = BranchBodyValidation(req.body);
        if (error) {
            return res.status(403).json({
                error: true,
                message: error.details[0].message
            });
        }

        const branchService = new BranchService();

        const response = await branchService.RegisterBranch(req.body)

        return res.status(response.status).json(response);

    } catch (e) {
        res.status(500).json({
            success: false,
            error: e
        })
    }
};

const GetAllBranches = async (req, res) => {
    try {
        const branchService = new BranchService();

        const response = await branchService.getAllBranches();

        return res.status(response.status).json(response);
    } catch (e) {
        console.log(e);
    }
}

export { RegisterBranchController, GetAllBranches };