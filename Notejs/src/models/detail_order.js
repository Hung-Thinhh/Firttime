'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Detail_Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Detail_Order.hasOne(models.Order, { foreignKey: 'id_ctdh' })

        }
    };
    Detail_Order.init({
        id_sp: DataTypes.STRING,
        model: DataTypes.STRING,
        quantity: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Detail_Order',
    });
    return Detail_Order;
};