'use strict'

const CourseModel = require('./course.model');

exports.courseController = {
    addCourse: (req, res) => {
        let data = req.body;
       CourseModel.courseModel.addCourse(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Course unable to create'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Course created successfully'});
           }
        })
    },
    updateCourse: (req, res) => {
        let data = req.body;
       CourseModel.courseModel.updateCourse(data)
        .then((result) => {
            //console.log(result);
           if(result > 0){
               res.send({error:true, status:501, Result:result, message:'Course update fail!'});
        }else{
               res.send({error:false, status:200, Result:result, message:'Course updated successfully'});
           }
        })
    },

    getAllCourse: (req, res) => {
        CourseModel.courseModel.getAllCourse()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Error in Getting All Course'});
            }else{
                res.send(result);
            }
        });
    },

    getOneCourse: (req, res) => {
        let data = req.body;
        console.log('DATA:::::', data);
        CourseModel.courseModel.getOneCourse(data)
        .then((result) => {
            if(result === null){
                res.send({error:true, status:401, Result:result});
            }else{
                res.send(result);
            }
        });
    }
}