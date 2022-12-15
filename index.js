import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import morgan from 'morgan';
import cors from 'cors';

//--------ROUTES IMPORTS------ //
import corporateRouter from './routes/Corporate.js';
import branchRouter from './routes/Branch.js';
import departmentRouter from './routes/Department.js';
import authRouter from './routes/Auth.js';

dotenv.config();

const rootUrl = '/api/v1/hrms/'
const PORT = process.env.PORT || 8080;
const app = express();

//--------MIDDLEWARES---------//
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))



//-----------ROUTES----------//
app.use(rootUrl + 'auth', authRouter);
app.use(rootUrl + 'corporate', corporateRouter);
app.use(rootUrl + 'branch', branchRouter);
app.use(rootUrl + 'department', departmentRouter);


//-----------Database Syncing and starting server---------//
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Server started"))
}).catch((e) => {
    console.log("Sequelize sync error", e)
})

