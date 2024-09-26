import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.div`
    border: 1px dotted black;
    border-radius: 10px;
    background-color: seashell;

    &:hover {
        transform: scale(1.1);
        font-weight: bolder;
        color: red;
    }
`

export default function User(props) {

    //receive props
    const { details } = props
    if (!details) {
        return <h2>Working on fetching user details...</h2>
    }
    return (
        <StyledUser>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
        </StyledUser>
    )
}
