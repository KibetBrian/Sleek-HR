import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path, { dirname } from 'path';
import process from 'node:process';

dotenv.config();

const configPath = path.resolve(process.cwd(), './config/config.json');

let configBytes;
try {
    configBytes = fs.readFileSync(configPath);
} catch (e) {
    throw e
};

const config = JSON.parse(configBytes);

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

export default sequelize;
