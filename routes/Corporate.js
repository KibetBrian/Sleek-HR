
import { Router } from "express";
import { RegisterCorporateController, SayHello } from "../controllers/Corporate.js";

const corporateRoute = Router();

corporateRoute.get('/hello', SayHello);
corporateRoute.post('/register', RegisterCorporateController)


export default corporateRoute;