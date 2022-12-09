
import { Router } from "express";
import { RegisterCorporate, SayHello } from "../controllers/Corporate.js";

const corporateRoute = Router();

corporateRoute.get('/hello', SayHello);
corporateRoute.post('/register', RegisterCorporate)


export default corporateRoute;