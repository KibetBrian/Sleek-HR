import Corporate from "../models/Corporate.js";
import { RegistrationValidation } from "../utils/validations.js";

const SayHello = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Route working well"
    })
};

const RegisterCorporate = async (req, res) => {
    try {
        const { error } = RegistrationValidation(req.body);
        if (error) {
            return res.status(403).json({
                error: true,
                message: error.details[0].message
            });
        }
        const response = await Corporate.create(req.body);
        res.status(200).json(response)
    } catch (e) {
        console.log("Error", e)
        res.status(500).json("Internal server error")
    }
}

export { SayHello, RegisterCorporate };