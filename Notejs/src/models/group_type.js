'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group_Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Group_Type.hasMany(models.Type_Sp, { foreignKey: 'id_group_loai' })

        }
    };
    Group_Type.init({
        name: DataTypes.STRING,
        img: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Group_Type',
    });
    return Group_Type;
};