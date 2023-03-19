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

module.exports.getAllProjects = (request, response) => {
    Project.find({})
        .then(projects => {
            console.log(projects); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(projects);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getProject = (request, response) => {
    Project.findOne({ _id: request.params.id })
        .then(project => response.json(project))
        .catch(err => response.json(err));
}

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.json(err))
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




