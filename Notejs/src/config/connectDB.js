const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Shopee', 'root', null,{
    host: 'localhost',
    dialect:'mysql',
    logging: false
    }
)

let connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('successfully');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;   