import { Sequelize, Op, Model, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequlizeOptions = {
    //logging: console.log
}
const sequelize = new Sequelize(process.env.DBURI, sequlizeOptions);

try {
    await sequelize.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('Database connection failed:', error);
}

export default sequelize;
