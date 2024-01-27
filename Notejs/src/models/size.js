'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Size extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Size.belongsTo(models.Model_Product, { foreignKey: 'id_model' })

        }
    };
    Size.init({
        id_model: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Size',
    });
    return Size;
};