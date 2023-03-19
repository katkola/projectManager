import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    // retrieve the current values for this Project so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.description);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProject = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/projects/' + id, {
            title,    // this is shortcut syntax for title: title,
            price,
            description      // this is shortcut syntax for lastName: lastName
        })
            .then(res => {
                console.log(res);
                navigate("/home"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Project</h1>
            <form onSubmit={updateProject}>
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
            </form>
        </div>
    )
}
export default Update;

