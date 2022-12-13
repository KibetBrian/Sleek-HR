import { Sequelize } from 'sequelize';
import config from './config.js';
import dotenv from 'dotenv';
dotenv.config();

const sequlizeOptions = {
    //logging: console.log
}

const CreateDBURI = (object) => {
    return `${object.dialect}://${object.username}:${object.password}@${object.host}:${object.port}/${object.database}`
}

let DBURI;
if (process.env.APP_ENVIRONMENT === 'dev') {
};
switch (process.env.APP_ENVIRONMENT) {
    case 'dev':
        DBURI = CreateDBURI(config.development);
        break;
    case 'production':
        DBURI = CreateDBURI(config.production);
        break;
    case 'test':
        DBURI = CreateDBURI(config.test)
    default:
        DBURI = CreateDBURI(config.development);
        break;
};

const sequelize = new Sequelize(DBURI, sequlizeOptions);

try {
    await sequelize.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('Database connection failed:', error);
}

export default sequelize;
