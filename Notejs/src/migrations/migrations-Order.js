'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Order', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_user: {
                type: Sequelize.STRING,
            },
            id_ctdh: {
                type: Sequelize.STRING
            },
            total_price: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            message: {
                type: Sequelize.STRING
            },
            id_shipping: {
                type: Sequelize.STRING
            },
            id_voucher: {
                type: Sequelize.STRING
            },
            payment_methods: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Order');
    }
};