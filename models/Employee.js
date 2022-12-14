import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js';

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
        type: DataTypes.ENUM("Finance", "Tech", "Marketing", "Department")
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
    role: {
        type: DataTypes.ENUM("hr", "employee", "admin"),
        defaultValue: "employee"
    }
}, { timestamps: true, freezeTableName: true });

export default Employee;