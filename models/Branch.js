import { Sequelize, DataTypes, JSONB } from 'sequelize';
import { uuid } from 'uuidv4';
import sequelize from '../configs/db.js';
import Corporate from './Corporate.js';

const Branch = sequelize.define('Corporate', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuid(),
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
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
},
    {
        timestamps: true,
        indexes: [{
            unique: true,
            fields: ['name']
        }]
    }
);


try {
    await sequelize.sync({force: true});
    Branch.belongsTo(Corporate, {foreignKey: 'corporateId'})
    console.log("Corporate table created successfully")
} catch (e) {
    console.log(e);
    console
}
export default Branch;



