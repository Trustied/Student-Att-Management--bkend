const CourseController = require('./course.controller');

exports.courseRoutes = function(app){
    app.post('/api/add_course', CourseController.courseController.addCourse);
    app.post('/api/update_course', CourseController.courseController.updateCourse);
    app.get('/api/all_course', CourseController.courseController.getAllCourse);
    app.post('/api/one_course/',CourseController.courseController.getOneCourse);
}