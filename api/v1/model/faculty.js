const { Sequelize } = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define('faculties',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        faculty_name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        department:{
            type:Sequelize.STRING,
            allowNull:false
        },
        createdAt:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
    });

    return Faculty;
}