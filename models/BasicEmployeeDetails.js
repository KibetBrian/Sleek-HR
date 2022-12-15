import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js';

const BasicEmployeeDetails = sequelize.define('basic_employee_details', {
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
        type: DataTypes.ENUM("male", "female"),
        allowNull: false
    },
    department: {
        type: DataTypes.ENUM("finance", "tech", "marketing", "department"),
        allowNull: false
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
    },
    roles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ["employee"],
        allowNull: false
    },
    permisions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ["read"],
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '1234'
    }
}, { timestamps: true, freezeTableName: true });

export default BasicEmployeeDetails;