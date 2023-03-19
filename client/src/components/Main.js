import React, { useState, useEffect } from 'react'
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    
    const [projects, setProjects] = useState([]);

    const removeFromDom = projectId => {
        setProjects(projects.filter(project => project._id != projectId));
    }

    const updatePage = newProject =>{
        setProjects([...projects, newProject]);
        console.log(newProject);
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/projects")
            .then((res)=>{
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[] )

    
    return (
        <div>
            <ProjectForm projects={projects} setProjects={setProjects} updatePage={updatePage}/>
            <ProjectList projects={projects} setProjects={setProjects} removeFromDom={removeFromDom}/>
            
        </div>
    )
}
export default Main;