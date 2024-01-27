'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group_Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Group_Role.belongsTo(models.User, { foreignKey: 'id_user' })
            Group_Role.belongsTo(models.Group_User, { foreignKey: 'id_group' })

        }
    };
    Group_Role.init({
        id_user: DataTypes.STRING,
        id_group: DataTypes.STRING,
        
    }, {
        sequelize,
        modelName: 'Group_Role',
    });
    return Group_Role;
};