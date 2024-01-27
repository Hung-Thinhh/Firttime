'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      LoginName: "hungthinh2003",
    password: "123456",
    UserName: "Nguyễn Hưng Thịnh",
    address: "KONOHA",
    email: "hungthinhh2003@gmail.com",
    PhoneNumber: "0123456789",
    gender: 1,
    birthday: "2003-04-25",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
