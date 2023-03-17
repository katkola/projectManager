const Project = require('../models/project.model')
//test message for backend
module.exports.index = (request, response) => {  
    response.json({     
        message: "Welcome"
    });
}
module.exports.createProject = (request, response) => {
    Project.create(request.body) 
        .then(project => response.json(project))
        .catch(err => response.json(err));
}

