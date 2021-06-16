import React from 'react'

export default function User(props) {

    //receive props
    const { details } = props
    if (!details) {
        return <h2>Working on fetching user details...</h2>
    }
    return (
        <div>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
        </div>
    )
}
