const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection');
const Admin = require('../model/admin')(sequelize, Sequelize);
const { op } =require('sequelize');

Admin.sync();

exports.adminModel = {
    createAdmin: async (data) => {
        return await new Promise((resolve, reject) => {
            Admin.create(data).then((admin) => {
                resolve(admin.dataValues);
            },
            (err) => {
                reject(err);
            }
            );
        });
    },
    
   login: async (data) => {
    return await new Promise((resolve, reject) => {
        Admin.findOne({where: {email:data.email}})
        .then((admin) => {
            resolve(admin)
        },
        (err) => {
            reject({error:err});
        });
    });
   }
}