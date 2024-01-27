'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_model: {
                type: Sequelize.STRING,
            },
            id_loai: {
                type: Sequelize.STRING
            },
            id_shop: {
                type: Sequelize.STRING
            },
            ten_sp: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.STRING
            },
            img: {
                type: Sequelize.STRING
            },
            reviewed: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            sold: {
                type: Sequelize.INTEGER
            },
            star: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('Product');
    }
};