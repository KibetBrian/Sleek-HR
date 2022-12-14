
import { Router } from "express";
import { auth, authorize } from "../middlewares/VerifyToken.js";
import { GetAllCorporates, RegisterCorporateController } from "../controllers/Corporate.js";

const corporateRouter = Router();

corporateRouter.get('/all', auth, authorize(["read"], ["admin", "hr"]), GetAllCorporates);
corporateRouter.post('/register', RegisterCorporateController)


export default corporateRouter;