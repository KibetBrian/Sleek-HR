import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../configs/db.js';
import Branch from './Branch.js';

const Corporate = sequelize.define('corporates', {
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
    domain: {
        type: DataTypes.STRING,
    },
    logo: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    legacyId: DataTypes.STRING,
    corporateHead: DataTypes.STRING

},
    {
        freezeTableName: true,
        timestamps: true,
        indexes: [{
            unique: true,
            fields: ['name']
        }]
    }

);
try {
    await sequelize.sync({ force: true });
    Corporate.hasMany(Branch);
    console.log("Corporate table created successfully")
} catch (e) {
    console.log(e);
    console.log("Error occured while syncronizing models", e)
}
export default Corporate;



