import React from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
    text-align: center;
`

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const Description = styled.div`
    padding: 20px 0 10px 0;   
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
        width: 25%;
        text-decoration: none;
    }
`

const Comment = (props) => {
    const description = props.description

    const destroy = () => {
        axios.delete(`/api/v1/comments/${props.id}`)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    return (
        <Wrapper>
            <Card>
                <Description>{description}</Description>
            </Card>
            <DelButton>
                <button type="button" onClick={destroy}>Delete Comment</button>
            </DelButton>
        </Wrapper>
    )
}

export default Comment