import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const ProjectList = (props) => {
    const {removeFromDom, projects, setProjects} = props;

    const deleteProject = (projectId) =>{
        axios.delete('http://localhost:8000/api/projects/' + projectId)
        .then(res => {
            removeFromDom(projectId)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            {
                projects.map((project, index) => {
                    return (<div key={index}>
                        <p>{project.title}</p> 
                        <p>{project.price}</p>
                        <p>{project.description}</p>

                        <Link to={`/projects/${project._id}`}> {project.title}'s Page! </Link>
                        <Link to={`/projects/edit/${project._id}`}>Edit</Link>
                        <DeleteButton projectId={project._id} successCallback={()=>deleteProject(project._id)}/>
                        {/* <button onClick={(e)=>{deleteProject(project._id)}}>
                            Delete
                        </button> */}
                    </div>)
                })
            }
        </div>
    )
}
export default ProjectList;