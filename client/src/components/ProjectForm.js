import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const ProjectForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, updatePage} = props;
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescrip] = useState(initialDescription);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        updatePage({
            title,
            price,
            description
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h2>aaaaaaaaa</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescrip(e.target.value)} />
            </div>
            <input type="submit" />
        </form>
    )
}
export default ProjectForm;

