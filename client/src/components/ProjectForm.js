import React, { useEffect, useState } from 'react'
import axios, { formToJSON } from 'axios';

const ProjectForm= () => {
    const [ message, setMessage ] = useState("Loading...")
    const [title, setTitle] =  useState(""); 
    const [price, setPrice] =  useState(""); 
    const [description, setDescrip] =  useState(""); 

    const onSubmitHandler = (e) =>{

        e.preventDefault();
        axios.post('http://localhost:8000/api/projects', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" onChange={(e)=> setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={(e)=> setDescrip(e.target.value)}/>
            </div>
            <input type="submit"/>
        </form>
    )
}
export default ProjectForm;

