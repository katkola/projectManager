import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const ProjectForm = (props) => {
    const updatePage = props;
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescrip] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/api/projects', {
            title,
            price,
            description
        })
            .then(res => {
                navigate(0);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
            .then((res) => {
                console.log(res.data);
                setProjects(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescrip(e.target.value)} />
            </div>
            <input type="submit" />
        </form>
    )
}
export default ProjectForm;

