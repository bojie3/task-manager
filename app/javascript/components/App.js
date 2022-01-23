import styled from 'styled-components'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TasksContainer from './Tasks/TasksContainer'
import Task from './Task/Task'


const Header = styled.div`
    color: black;
    padding: 5px;
    text-align: center
`

const App = () => {
    return (
      <div className="container">
        <Header>
          <h1>Todo List</h1>
          
        </Header>
        
        <Router>
          <Routes>
            <Route exact path='/' element={<TasksContainer />}></Route>
            <Route exact path='/home' element={<TasksContainer />}></Route>
            <Route exact path='/api/v1/tasks/:id' element={<Task />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App