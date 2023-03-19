import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
const Detail = (props) => {
    const removeFromDom = props;
    const [project, setProject] = useState({})
    const navigate = useNavigate();
    const { id } = useParams();
    const deleteProject = (projectId) =>{
        axios.delete('http://localhost:8000/api/projects/' + projectId)
        .then(res => {
            navigate('/home');
            removeFromDom(projectId);
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/" + id)
            .then(res => {
                console.log(res.data);
                setProject(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <p>{project.title}</p>
            <p>{project.price}</p>
            <p>{project.description}</p>
            <button onClick={(e)=>{deleteProject(project._id)}}>
                            Delete
                        </button>
        </div>
    );
}
export default Detail;