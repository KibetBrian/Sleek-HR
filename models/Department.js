import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../configs/db.js';
import Branch from "./Branch.js";

const Department = sequelize.define('departments', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noOfEmployees: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    departmentHead: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: true,
    indexes: [{
        unique: true,
        fields: ['name']
    }]
},);

Branch.hasMany(Department);
Department.belongsTo(Branch);

export default Department;