import express from 'express';
import dotenv from 'dotenv';
import sequelize from './configs/db.js';

//--------ROUTES IMPORTS------ //
import corporateRoute from './routes/Corporate.js';
import branchRoute from './routes/Branch.js';

dotenv.config();
sequelize.sync();
const [results, metadata] = await sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

const rootUrl = '/api/v1/hrm/'
const PORT = process.env.PORT || 8080;
const app = express();

//-----MIDDLEWARES-------//
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Application working",
    })
});

//-----------ROUTES------
app.use(rootUrl+'corporate', corporateRoute);
app.use(rootUrl+'branch', branchRoute)

app.listen(PORT, () => console.log("Server started"))
