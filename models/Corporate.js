import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../configs/db.js';

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

export default Corporate;



