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
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log('Unable to connect to the database:',err);
    }
}

export default  connectDB;   