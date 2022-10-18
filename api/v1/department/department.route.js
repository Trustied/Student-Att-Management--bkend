const DepartmentController = require('./Department.controller');

exports.departmentRoutes = function(app){
    app.post('/api/add_Department', DepartmentController.departmentController.addDepartment);
    app.post('/api/update_Department', DepartmentController.departmentController.updateDepartment);
    app.get('/api/all_Department', DepartmentController.departmentController.getAllDepartment);
    app.post('/api/one_Department/',DepartmentController.departmentController.getOneDepartment);
}