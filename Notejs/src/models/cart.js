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
            Cart.belongsTo(models.User, { foreignKey: 'id_user' })

        }
    };
    Cart.init({
        id_user: DataTypes.STRING,
        id_sp: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        id_size: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};