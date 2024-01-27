'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Voucher.belongsTo(models.Shop, { foreignKey: 'id_voucher' })
            Voucher.belongsTo(models.Type_Voucher, { foreignKey: 'id_loai' })

        }
    };
    Voucher.init({
        code: DataTypes.STRING,
        value: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        id_loai: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Voucher',
    });
    return Voucher;
};