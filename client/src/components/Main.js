import React, { useState } from 'react'
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = (props) => {
    
    const [projects, setProjects] = useState([]);

    const removeFromDom = projectId => {
        setProjects(projects.filter(project => project._id != projectId));
    }
    
    return (
        <div>
            <ProjectForm projects={projects} setProjects={setProjects}/>
            <ProjectList projects={projects} setProjects={setProjects}/>
            
        </div>
    )
}
export default Main;