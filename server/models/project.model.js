const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title: { type: String,
        minLength: 5 },
    price: { type: Number,
        minimum: 0},
    description: { type: String,
        minLength: 5 }
}, { timestamps: true });
module.exports = mongoose.model('Project', ProjectSchema);

