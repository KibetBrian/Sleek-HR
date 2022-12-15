import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';


//---------Local module imports-------//
import sequelize from './config/db.js';
import winston from './config/winston.js';


//--------Routes imports------ //
import corporateRouter from './routes/Corporate.js';
import branchRouter from './routes/Branch.js';
import departmentRouter from './routes/Department.js';
import authRouter from './routes/Auth.js';

dotenv.config();

//-------Application Variables-------//
const rootUrl = '/api/v1/hrms/'
const PORT = process.env.PORT || 8080;
const app = express();


//--------Middlewares---------//
app.use(express.json());
app.use(cors());
app.use(morgan('combined', { stream: winston.stream }));


//-----------Routes----------//
app.use(rootUrl + 'auth', authRouter);
app.use(rootUrl + 'corporate', corporateRouter);
app.use(rootUrl + 'branch', branchRouter);
app.use(rootUrl + 'department', departmentRouter);


//-----------Database Syncing and starting server---------//
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Server started"))
}).catch((e) => {
    console.log("Sequelize sync error", e)
});

