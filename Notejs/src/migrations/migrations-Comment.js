'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Comment', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_user: {
                type: Sequelize.STRING,
            },
            id_sp: {
                type: Sequelize.STRING
            },
            star: {
                type: Sequelize.FLOAT
            },
            id_size: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.STRING
            },
            feedback_by_shop: {
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
        await queryInterface.dropTable('Comment');
    }
};