import BasicEmployeeDetails from "../models/BasicEmployeeDetails";
import { INTERNAL_SERVER_ERROR } from "../utils/utils";

class BasicEmployeeDetails {
    constructor() {
        this.model = BasicEmployeeDetails;
    }

    async Add(data) {
        try {
            const response = await this.model.create(data);
            return {
                success: true,
                status: 200,
                data: response
            }
        } catch (e) {
            return INTERNAL_SERVER_ERROR
        }
    };

    async update(data) {
        try {

        } catch (e) {
            return INTERNAL_SERVER_ERROR;
        }
    }
}

export default BasicEmployeeDetails;   