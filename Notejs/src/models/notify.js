'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notify extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Notify.belongsTo(models.User, { foreignKey: 'id_user' })

        }
    };
    Notify.init({
        id_user: DataTypes.STRING,
        description: DataTypes.STRING,
        id_dh: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Notify',
    });
    return Notify;
};