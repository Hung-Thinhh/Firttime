'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cart.belongsTo(models.User, { foreignKey: 'ID_user' })

        }
    };
    Cart.init({
        ID_user: DataTypes.STRING,
        link_product: DataTypes.STRING,
        image: DataTypes.STRING,
        quality: DataTypes.INTEGER,
        shop_name: DataTypes.STRING,
        product_name: DataTypes.STRING,
        Price: DataTypes.FLOAT,
        category: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};