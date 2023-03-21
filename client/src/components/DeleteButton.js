import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { projectId, successCallback } = props;
    const deleteProject = e => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProject}>
            Delete
        </button>
    )
}
export default DeleteButton;

