'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shop extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shop.hasMany(models.Product, { foreignKey: 'id_shop' })
            Shop.hasMany(models.Voucher, { foreignKey: 'id_voucher' })
            Shop.belongsTo(models.Voucher, { foreignKey: 'id_user' })

        }
    };
    Shop.init({
        shop_name: DataTypes.STRING,
        id_user: DataTypes.STRING,
        avt: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        following: DataTypes.INTEGER,
        followed: DataTypes.INTEGER,
        sum_feedback: DataTypes.INTEGER,
        id_voucher: DataTypes.STRING,
        address: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Shop',
    });
    return Shop;
};