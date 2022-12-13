
import { Router } from "express";
import { GetAllCorporates, RegisterCorporateController } from "../controllers/Corporate.js";

const corporateRouter = Router();

corporateRouter.get('/all', GetAllCorporates);
corporateRouter.post('/register', RegisterCorporateController)


export default corporateRouter;