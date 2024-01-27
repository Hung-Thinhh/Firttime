'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, { foreignKey: 'id_user' })
            Order.belongsTo(models.Detail_Order, { foreignKey: 'id_ctdh' })
            Order.belongsTo(models.Shipping_Unit, { foreignKey: 'id_shipping' })
        }
    };
    Order.init({
        id_user: DataTypes.STRING,
        id_ctdh: DataTypes.STRING,
        total_price: DataTypes.STRING,
        status: DataTypes.STRING,
        address: DataTypes.STRING,
        message: DataTypes.STRING,
        id_shipping: DataTypes.STRING,
        id_voucher: DataTypes.STRING,
        payment_methods: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};