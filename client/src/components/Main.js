import React, { useState } from 'react'
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = (props) => {
    
    const [projects, setProjects] = useState([]);
    
    return (
        <div>
            <ProjectForm projects={projects} setProjects={setProjects}/>
            <ProjectList projects={projects} setProjects={setProjects}/>
            
        </div>
    )
}
export default Main;