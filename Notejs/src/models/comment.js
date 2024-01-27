'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comment.belongsTo(models.User, { foreignKey: 'id_user' })

        }
    };
    Comment.init({
        id_user: DataTypes.STRING,
        id_sp: DataTypes.STRING,
        star: DataTypes.FLOAT,
        id_size: DataTypes.STRING,
        content: DataTypes.STRING,
        feedback_by_shop: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Comment',
    });
    return Comment;
};