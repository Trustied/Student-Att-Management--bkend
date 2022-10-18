const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection.js');
const Department = require('../model/department')(sequelize, Sequelize);
const { op, where } = require('sequelize');

Department.sync();

exports.departmentModel = {
    addDepartment: async (data) => {
        return await new  Promise((resolve, reject) => {
            Department.create(data).then((department) => {
                resolve(department.dataValues);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    updateDepartment: async(data) =>{
        return await new Promise(
            (resolve, reject) => {
                updateDepartment(this.id)
                .then((data) => {resolve(data);
                }, (err)=>{
                    reject({error:err});
                });
            
            });
    },

    getAllDepartment: async () => {
        return await new Promise((resolve, reject) => {
            Department.findAll()
            .then((department) => {
                resolve(department);
            },
            (err) => {
                reject({error:err});
            });
        });
    },

    getOneDepartment: async (data) => {
        return await new Promise((resolve, reject) => {
            Department.findOne({where : {id:data.id}})
            .then((department) => {
                resolve(department);
            });
        });
    }
}