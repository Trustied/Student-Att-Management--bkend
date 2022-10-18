const { Sequelize } = require("sequelize");
const sequelize = require("../../../config/connection");

module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('courses',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        course_title:{
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

    return Course;
}