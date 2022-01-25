//this is the individual task to be displayed in taskcontainer
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`

const TaskName = styled.div`
    padding: 20px 0 10px 0;   
`

const ViewTask = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`
const DelButton = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    button {
        color: #ffcccb;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 50%;
        text-decoration: none;
    }
`
const Task = (props) => {
    const destroy = () => {
        axios.delete(`/api/v1/tasks/${props.attributes.id}`)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }
    return (
        <Card>
            <TaskName>{props.attributes.title}</TaskName>
            <ViewTask>
                <Link to={`/api/v1/tasks/${props.attributes.id}`}>View task</Link>
            </ViewTask>
            <DelButton>
                <button type="button" onClick={destroy}>Delete Task</button>
            </DelButton>
        </Card>
    )
}

export default Task
