'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Model_Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Model_Product.belongsTo(models.Product, { foreignKey: 'id_sp' })
            Model_Product.hasMany(models.Size, { foreignKey: 'id_model' })

        }
    };
    Model_Product.init({
        id_sp: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Model_Product',
    });
    return Model_Product;
};