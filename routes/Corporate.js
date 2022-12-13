
import { Router } from "express";
import { GetAllCorporates, RegisterCorporateController } from "../controllers/Corporate.js";

const corporateRoute = Router();

corporateRoute.get('/all', GetAllCorporates);
corporateRoute.post('/register', RegisterCorporateController)


export default corporateRoute;