'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, { foreignKey: 'id_user' })
      User.hasMany(models.Comment, { foreignKey: 'id_user' })
      User.hasMany(models.Notify, { foreignKey: 'id_user' })
      User.hasOne(models.Shop, { foreignKey: 'id_user' })
      User.hasMany(models.Group_Role, { foreignKey: 'id_user' })
      User.hasMany(models.Order, { foreignKey: 'id_user' })
    }
  };
  User.init({
    loginName: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    birthDay: DataTypes.DATE,
    avt:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};