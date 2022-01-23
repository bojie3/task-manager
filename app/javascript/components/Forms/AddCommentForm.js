import React, { useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"


const AddComment = (props) => {
    const [description, setDescription] = useState("")  

    const handleSubmit = (e) => {
        const csrfToken = document.querySelector('[name=csrf-token').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        
        const task_id = props.task_id
        axios.post('/api/v1/comments', {description, task_id})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" value={description} onChange={e => setDescription(e.target.value)} placeholder="type to add comment"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddComment