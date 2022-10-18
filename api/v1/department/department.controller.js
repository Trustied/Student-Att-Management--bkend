'use strict'

const DepartmentModel = require('./department.model');

exports.departmentController = {
    addDepartment: (req, res) => {
        let data = req.body;
       DepartmentModel.departmentModel.addDepartment(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Department unable to create'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Department created successfully'});
           }
        })
    },
    updateDepartment: (req, res) => {
        let data = req.body;
       DepartmentModel.departmentModel.updateDepartment(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Department update fail!'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Department updated successfully'});
           }
        })
    },

    getAllDepartment: (req, res) => {
        DepartmentModel.departmentModel.getAllDepartment()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Error in Getting All Department'});
            }else{
                res.send(result);
            }
        });
    },

    getOneDepartment: (req, res) => {
        let data = req.body;
        console.log('DATA:::::', data);
        DepartmentModel.departmentModel.getOneDepartment(data)
        .then((result) => {
            if(result === null){
                res.send({error:true, status:401, Result:result});
            }else{
                res.send(result);
            }
        });
    }
}