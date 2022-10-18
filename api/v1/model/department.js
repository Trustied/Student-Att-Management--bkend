const { Sequelize } = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('departments',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        department_name:{
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

    return Department;
}