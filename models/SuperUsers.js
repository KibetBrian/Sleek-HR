import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../configs/db.js';

const SuperUsers = sequelize.define('super-users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.String,
        allowNull: false
    },
    email: {
        type: String,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("Admin", "HR", "Employee"),
        allowNull: false
    },
    password: {
        type: DataTypes.String,
        allowNull: false
    }
}, { timestamps: true, freezeTableName: true });

export default SuperUsers;