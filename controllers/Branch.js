import { RegisterBranchService } from "../services/RegisterBranch.js";
import { BranchBodyValidation } from "../utils/validations.js";

const SayHello = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Route working well"
    })
};

const RegisterBranchController = async (req, res) => {
    try {
        const { error } = BranchBodyValidation(req.body);
        if (error) {
            return res.status(403).json({
                error: true,
                message: error.details[0].message
            });
        }
        const response = await RegisterBranchService(req.body);

        return res.status(response.status).json(response);

    } catch (e) {
        res.status(500).json({
            success: false,
            error: e
        })
    }
}

export { SayHello, RegisterBranchController };