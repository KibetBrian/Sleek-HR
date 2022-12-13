import { CorporateService } from "../services/CorporateService.js";
import { RegistrationValidation } from "../utils/validations.js";

const RegisterCorporateController = async (req, res) => {
    try {

        const { error } = RegistrationValidation(req.body);

        if (error) {
            return res.status(403).json({
                error: true,
                message: error.details[0].message
            });
        }

        const corporateService = new CorporateService();

        const response = await corporateService.registerCorporate(req.body);

        return res.status(response.status).json(response);

    } catch (e) {

        res.status(500).json("Internal server error")
    }
};

const GetAllCorporates = async (req, res) => {
    try {
        const corporateService = new CorporateService();

        const response = await corporateService.getAllCorporates();

        return res.status(response.status).json(response);
    } catch (e) {

    }
}

export { RegisterCorporateController, GetAllCorporates };