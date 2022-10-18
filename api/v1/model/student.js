const { Sequelize } = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('students', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        
        is_deleted:{
            type:Sequelize.BOOLEAN,
           allowNull:true,
           default:false
        },
        firstName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        lastName: {
            type:Sequelize.STRING,
            allowNull:true
        },
        email: {
            type:Sequelize.STRING,
            allowNull:false
        },
        password: {
            type:Sequelize.STRING,
            allowNull:false
        },
        faculty:{
            type:Sequelize.STRING,
            allowNull:true
        },
        department:{
            type:Sequelize.STRING,
            allowNull:true
        },
        gender:{
            type:Sequelize.STRING,
            allowNull:true
        },
        state:{
            type:Sequelize.STRING,
            allowNull:true
        },
        country:{
            type:Sequelize.STRING,
            allowNull:true
        },
        createdAt:{
            type:Sequelize.DATE,
            allowNull:true,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
    });

    return Student;
}