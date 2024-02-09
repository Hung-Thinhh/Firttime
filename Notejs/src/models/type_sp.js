'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type_Sp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Type_Sp.belongsTo(models.Group_Type, { foreignKey: 'id_group_loai' })
            Type_Sp.hasMany(models.Product, {foreignKey: 'id_loai'})
        }
    };
    Type_Sp.init({
        id_group_loai: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Type_Sp',
    });
    return Type_Sp;
};