'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Carts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ID_user: {
                type: Sequelize.INTEGER,
            },
            link_product: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            quality: {
                type: Sequelize.INTEGER
            },
            shop_name: {
                type: Sequelize.STRING
            },
            product_name: {
                type: Sequelize.STRING
            },
            Price: {
                type: Sequelize.FLOAT
            },
            category: {
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
        await queryInterface.dropTable('Carts');
    }
};