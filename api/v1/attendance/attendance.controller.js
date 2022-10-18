'use strict'

const AttendanceModel = require('./attendance.model');

exports.attendanceController = {
    createAttendance: (req, res) => {
        let data = req.body;
        AttendanceModel.attendanceModel.createAttendance(data)
        .then((result) => {
            if(result > 0){
                res.send({error:true, status:501, Result:result, message:'Unable to take Attendance'});
            }else{
                res.send({error:false, status:200, Result:result, message:'Attendance Successfully taken'});
            }
        });
    },

    getAllAttendance: (req, res) => {
        AttendanceModel.attendanceModel.getAllAttendance()
        .then((result) => {
            if(result === null){
                res.send({error:true, status:501, Result:result, message:'Failed to get Attendance List'});
            }else{
                res.send(result);
            }
        });
    }
}