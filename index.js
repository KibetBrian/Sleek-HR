import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';

//--------ROUTES IMPORTS------ //
import corporateRouter from './routes/Corporate.js';
import branchRouter from './routes/Branch.js';
import departmentRouter from './routes/Department.js';
import authRouter from './routes/Auth.js';

dotenv.config();

const rootUrl = '/api/v1/hrm/'
const PORT = process.env.PORT || 8080;
const app = express();

//--------MIDDLEWARES---------//
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Application working",
    })
});


//-----------ROUTES----------//
app.use(rootUrl+'auth', authRouter);
app.use(rootUrl + 'corporate', corporateRouter);
app.use(rootUrl + 'branch', branchRouter);
app.use(rootUrl+'department', departmentRouter);


//-----------Database Syncing and starting server---------//
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Server started"))
}).catch((e) => {
    console.log("Sequelize sync error", e)
})

