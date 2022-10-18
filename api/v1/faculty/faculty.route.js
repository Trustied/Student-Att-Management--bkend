const FacultyController = require('./Faculty.controller');

exports.facultyRoutes = function(app){
    app.post('/api/add_Faculty', FacultyController.facultyController.addFaculty);
    app.post('/api/update_faculty', FacultyController.facultyController.updateFaculty);
    app.get('/api/all_Faculty', FacultyController.facultyController.getAllFaculty);
    app.post('/api/one_Faculty/',FacultyController.facultyController.getOneFaculty);
}