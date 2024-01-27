'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Shop, { foreignKey: 'id_shop' })
            Product.belongsTo(models.Type_Sp, {foreignKey: 'id_loai'})
            Product.hasMany(models.Model_Product, { foreignKey: 'id_model' })
        }
    };
    Product.init({
        id_model: DataTypes.STRING,
        id_loai: DataTypes.STRING,
        id_shop: DataTypes.STRING,
        ten_sp: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        sold: DataTypes.INTEGER,
        img: DataTypes.STRING,
        reviewed: DataTypes.STRING,
        star: DataTypes.FLOAT,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};