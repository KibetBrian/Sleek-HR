import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js';
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
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employess: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue: [],
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