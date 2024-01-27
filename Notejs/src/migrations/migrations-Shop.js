'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Shop', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            shop_name: {
                type: Sequelize.STRING,
            },
            id_user: {
                type: Sequelize.STRING
            },
            avt: {
                type: Sequelize.STRING
            },
            id_voucher: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            avt: {
                type: Sequelize.STRING
            },
            followed: {
                type: Sequelize.INTEGER
            },
            following: {
                type: Sequelize.INTEGER
            },
            sum_feedback: {
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Shop');
    }
};