const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection.js');
const Course = require('../model/course')(sequelize, Sequelize);
const { op, where } = require('sequelize');

Course.sync();

exports.CourseModel = {
    addCourse: async (data) => {
        return await new  Promise((resolve, reject) => {
            Course.create(data).then((course) => {
                resolve(course.dataValues);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    updateCourse: async(data) =>{
        return await new Promise(
            (resolve, reject) => {
                updateCourse(this.id)
                .then((data) => {resolve(data);
                }, (err)=>{
                    reject({error:err});
                });
            
            });
    },

    getAllCourse: async () => {
        return await new Promise((resolve, reject) => {
            Course.findAll()
            .then((course) => {
                resolve(course);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    getOneCourse: async (data) => {
        return await new Promise((resolve, reject) => {
            Course.findOne({where : {id:data.id}})
            .then((course) => {
                resolve(course);
            });
        });
    }
}