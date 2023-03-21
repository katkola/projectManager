import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectForm from '../components/ProjectForm';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [project, setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' + id)
            .then(res => {
                console.log(project);
                setProject(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProject = projectParms => {
        axios.put('http://localhost:8000/api/projects/' + id, projectParms)
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Project</h1>
            {
                loaded && <ProjectForm updatePage={updateProject} 
                initialTitle={project.title} initialPrice={project.price} 
                initialDescription={project.description} />
            
            }
            {/* <form onSubmit={updateProject}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
        </div>
    )
}
export default Update;

