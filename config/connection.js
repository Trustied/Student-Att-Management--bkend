const env = require('./env');
const Sequelize = require('sequelize');
const cli = require ('cli-color');


const sequelize = new Sequelize(env.db_name, env.db_username, env.db_password,{
    host: env.db_host,
    port: env.db_port,
    dialect: env.db_dialect,
    operatorsAliases: false,
    defines:{
        charset: 'utf8',
        collator: 'utf8_general_ci',
        timestamps: true

    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
});

try{
    sequelize.authenticate();
    console.log(cli.bgGreen('Database connection successful!'));

}catch{
    console.log(cli.bgRed('Database connection failed!'));

}

module.exports = sequelize;