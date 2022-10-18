'use strict'

const FacultyModel = require('./faculty.model');

exports.facultyController = {
    addFaculty: (req, res) => {
        let data = req.body;
       FacultyModel.facultyModel.addFaculty(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Faculty unable to create'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Faculty created successfully'});
           }
        })
    },
    updateFaculty: (req, res) => {
        let data = req.body;
       FacultyModel.facultyModel.updateFaculty(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Faculty update fail!'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Faculty updated successfully'});
           }
        })
    },

    getAllFaculty: (req, res) => {
        FacultyModel.facultyModel.getAllFaculty()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Error in Getting All Faculty'});
            }else{
                res.send(result);
            }
        });
    },

    getOneFaculty: (req, res) => {
        let data = req.body;
        console.log('DATA:::::', data);
        FacultyModel.facultyModel.getOneFaculty(data)
        .then((result) => {
            if(result === null){
                res.send({error:true, status:401, Result:result});
            }else{
                res.send(result);
            }
        });
    }
}