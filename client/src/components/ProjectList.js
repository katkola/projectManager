import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProjectList = (props) => {
    const {projects, setProjects} = props;
    

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

    return(
        <div>
            {
                projects.map((project, index) => {
                    return (<div key={index}>
                        <p>{project.title}</p> 
                        <p>{project.price}</p>
                        <p>{project.description}</p>

                        <Link to={`/projects/${project._id}`}> {project.title}'s Page! </Link>
                    </div>)
                })
            }
        </div>
    )
}
export default ProjectList;