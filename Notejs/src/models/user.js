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
      User.hasMany(models.Cart, { foreignKey: 'ID_user' })
    }
  };
  User.init({
    LoginName: DataTypes.STRING,
    password: DataTypes.STRING,
    UserName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    Date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};