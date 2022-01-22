import React, { useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

const Wrapper = styled.div`
    text-align: center;
    input{
        padding: 10px;
        border-radius: 10px;
        width: 25%;
        box-shadow: 0 0 15px 4px rgba(0,0,0,0.6);
    }

    button {
        text-align: center
        color: #fff;
        background: #ecc19c;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 5%;
    }

`

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
                <Wrapper>
                    <input name="title" value={description} onChange={e => setDescription(e.target.value)} placeholder="type to add comment"></input>
                    <button type="submit">Submit</button>
                </Wrapper>
                
            </form>
        </div>
    )

}

export default AddComment