'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shipping_Unit extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shipping_Unit.hasMany(models.Order, { foreignKey: 'id_shipping' })
        }
    };
    Shipping_Unit.init({
        name: DataTypes.STRING,
        
    }, {
        sequelize,
        modelName: 'Shipping_Unit',
    });
    return Shipping_Unit;
};