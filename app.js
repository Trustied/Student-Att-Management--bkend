'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./api/v1/admin/admin.route');
const student = require('./api/v1/student/student.route');
const attendance = require('./api/v1/attendance/attendance.route');
const faculty = require('./api/v1/faculty/faculty.route');
const department = require('./api/v1/department/department.route');
const course = require('./api/v1/course/course.route');


let port = 2020;

const router = express.Router();
app.use(cors());
student.studentRoutes(router);
admin.adminRoutes(router);
attendance.attendanceRoutes(router);
faculty.facultyRoutes(router);
department.departmentRoutes(router);
course.courseRoutes(router);

router.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        return next();
    }
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:true
}))

router.get('/', (req, res) => {
    res.send('Server is up...Catch ya!!');
})

app.use(router);
app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
});