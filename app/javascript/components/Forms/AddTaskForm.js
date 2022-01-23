import React, { useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

const Input = styled.div`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.6);

`
const Button = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    button {
        color: #fff;
        background: #ffcccb;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 25%;
        text-decoration: none;
    }
`
const AddTask = () => {
    const [title, setTitle] = useState("")  

    const handleSubmit = (e) => {
        const csrfToken = document.querySelector('[name=csrf-token').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/tasks', {title})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="type to add task"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddTask