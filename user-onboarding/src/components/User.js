import React from 'react'

export default function User({details}) {
    if (!details) {
        return <h3>Working on fetching user's details...</h3>
    }

    return (
        <div className='user container'>
            <h2>Name: {details.first_name}</h2> 
            <p>Email: {details.email}</p>  
        </div>
    )
}
