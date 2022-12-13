import { Sequelize, DataTypes, JSONB } from 'sequelize';
import sequelize from '../configs/db.js';
import Corporate from './Corporate.js';

const Branch = sequelize.define('branches', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    city: DataTypes.STRING,

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branchHead: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qrCode: DataTypes.STRING,

    privateDrivers: JSONB,

    corporateId: {
        type: DataTypes.UUID
    },

    corporateName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        timestamps: true,
        indexes: [{
            unique: true,
            fields: ['name']
        }]
    },
);

Corporate.hasMany(Branch);
Branch.belongsTo(Corporate);

export default Branch;



