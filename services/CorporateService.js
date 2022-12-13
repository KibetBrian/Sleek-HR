import Corporate from "../models/Corporate.js";
import { DB_ERROR_CODES } from "../utils/utils.js";

class CorporateService {

    constructor() {
        this.corporate = Corporate;
    }

    async registerCorporate(data) {
        try {
            const response = await this.corporate.create(data);
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
    }

    async getAllCorporates() {
        try {
            const response = await this.corporate.findAll();
            return {
                success: true,
                status: 200,
                corporates: response
            }
        } catch (e) {
            return {
                success: false,
                status: 500,
                message: "Internal Server error"
            }
        }
    }
}
export { CorporateService }