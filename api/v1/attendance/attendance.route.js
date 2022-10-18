const AttendanceController = require('./attendance.controller');

exports.attendanceRoutes = function(app){
    app.post('/take_attendance', AttendanceController.attendanceController.createAttendance);
    app.get('/api/attendance_list', AttendanceController.attendanceController.getAllAttendance);
}