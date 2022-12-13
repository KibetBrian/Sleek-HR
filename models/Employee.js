import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../configs/db.js';
import { findAllDepartmentNames } from "../utils/utils.js";
import Department from "./Department.js";

const departmentNames = findAllDepartmentNames();


const Employee = sequelize.define('Employees', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workEmail: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false
    },
    department: {
        type: DataTypes.ENUM(...departmentNames)
    },
    passport: {
        type: DataTypes.STRING
    },
    firstDayOfWork: {
        type: DataTypes.DATE,
        allowNull: false
    },
    compensationDetails: {
        type: DataTypes.ENUM("hourly", "salary")
    },
    salary: {
        type: DataTypes.INTEGER,
        defaut: 0
    },
    paymentPeriod: {
        type: DataTypes.ENUM("weekly", "monthly")
    }
}, { timestamps: true, freezeTableName: true });


export default Employee;