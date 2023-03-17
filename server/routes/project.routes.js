const ProjectController = require('../controllers/project.controller');
module.exports = (app) => {
    app.get('/api, ProjectController.index');
    app.post('/api/projects', ProjectController.createProject);
}