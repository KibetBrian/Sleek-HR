import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db";

const EmployeePersonalInfo = sequelize.define('employees_personal_info', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    phoneNo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
}, {
    timestamps: true,
    freezeTableName: true
})