const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection.js');
const Faculty = require('../model/faculty')(sequelize, Sequelize);
const { op, where } = require('sequelize');

Faculty.sync();

exports.facultyModel = {
    addFaculty: async (data) => {
        return await new  Promise((resolve, reject) => {
            Faculty.create(data).then((faculty) => {
                resolve(faculty.dataValues);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    updateFaculty: async(data) =>{
        return await new Promise(
            (resolve, reject) => {
                updateFaculty(this.department)
                .then((data) => {resolve(data);
                }, (err)=>{
                    reject({error:err});
                });
            
            });
    },

    getAllFaculty: async () => {
        return await new Promise((resolve, reject) => {
            Faculty.findAll()
            .then((faculty) => {
                resolve(faculty);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    getOneFaculty: async (data) => {
        return await new Promise((resolve, reject) => {
            Faculty.findOne({where : {id:data.id}})
            .then((faculty) => {
                resolve(faculty);
            });
        });
    }
}