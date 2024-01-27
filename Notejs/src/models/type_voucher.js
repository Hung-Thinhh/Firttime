'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type_Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Type_Voucher.hasMany(models.Voucher, { foreignKey: 'id_loai' })

        }
    };
    Type_Voucher.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Type_Voucher',
    });
    return Type_Voucher;
};