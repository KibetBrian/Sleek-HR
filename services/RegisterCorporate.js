import Corporate from "../models/Corporate.js";
import { DB_ERROR_CODES } from "../utils/utils.js";

const RegisterCorporateService = async (data) => {
    try {
        const response = await Corporate.create(data);
        if (response) {
            return {
                success: true,
                status: 200,
                message: "Corporate registered",
                corporateData: response
            }
        }
    } catch (e) {
        if (e.original.code === DB_ERROR_CODES.UCV) {
            return {
                success: false,
                status: 409,
                message: "Choose corporate with different name"
            }
        }

    }
};
export { RegisterCorporateService }