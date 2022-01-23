import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import AddTask from '../Forms/AddTaskForm'
import Task from "./Task"
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
    text-align: center;
`

const InputContainer = styled.div`
    padding: 15px;

    input {
        padding: 15px;
        width: 100%;
        border-radius: 25px;
        box-sizing: border-box;
    }
`

const Search = styled.div`
    padding: 15px;
    width: 100%;
    border-radius: 25px;
    box-sizing: border-box;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const TasksContainer = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('/api/v1/tasks')
        .then(resp => {setTasks(resp.data.data)})
        .catch(error => console.log(error))
    }, [tasks.length])

    const grid = tasks.map(item => {
        return ( 
            <Task 
                key={item.attributes.title}
                attributes={item.attributes}
            />
        )
    })

    return (
      <Wrapper>    
        <AddTask />
        <Grid>
            {grid}
        </Grid>  
        
      </Wrapper>    
    )
}

export default TasksContainer