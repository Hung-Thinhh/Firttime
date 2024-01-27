'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shop', [{
        shop_name: 'Teelab Official',
        id_user: '1',
        avt: 'https://down-ws-vn.img.susercontent.com/decd15b06ac56ba1981932c778aa191f_tn.webp',
        address: 'Cần Thơ',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shop', null, {});
  }
};
