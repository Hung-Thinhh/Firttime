'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      LoginName: "hungthinh2003",
    password: "123456",
    UserName: "Nguyễn Hưng Thịnh",
    address: "KONOHA",
    email: "hungthinhh2003@gmail.com",
    PhoneNumber: "0123456789",
    gender: 1,
    Date: "2003-04-25",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }

};
