//this is displayed when view more is pressed
import React, { useState, useEffect, Fragment } from "react"
import { useLocation, Link } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import AddComment from "../Forms/AddCommentForm"
import Comment from "./Comment"


const Wrapper = styled.div`
    text-align: center;
`

const Show = styled.div`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`
const Header = styled.div`


    h1{
        font-size: 40px
    }
`
const GoHome = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #ADD8E6;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Task = (props) => {
    const [comments, setComments] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [id, setid] = useState("")   //this id is task_id
    const [title, setTitle] = useState("")
    const location = useLocation()
    const url = location.pathname

    useEffect( () => {
        axios.get(url)
        .then(resp => {
            setComments(resp.data.included)
            setid(resp.data.data.attributes.id)
            setTitle(resp.data.data.attributes.title)
            setLoaded(true)
        })
        .catch(errors => console.log(errors))
    }, [comments.length])

    const userComments = comments.map(item => {
         return (
                <Comment
                    key={item.id}
                    description={item.attributes.description}
                    id={item.id}
                />
         )
    })
    
    return (
        <Wrapper>
            {loaded &&
            <Fragment>
                <GoHome>
                    <Link to={"/home"}>Home</Link>
                </GoHome>
                <Header>
                    <h1>{title}</h1>
                </Header>
                <AddComment
                    task_id={id}
                />
                <Show>{userComments}</Show> 
            </Fragment>
            }
                
        </Wrapper>
    )
}

export default Task
