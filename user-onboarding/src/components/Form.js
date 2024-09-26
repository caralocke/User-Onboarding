import React from 'react'
import styled from 'styled-components' //import styled components

//styling for Form
const StyledFormContainer = styled.form`
    display:flex;
    flex-direction:column;
`
const StyledForm = styled.form`
    border: 1px solid black;
    background-color: seashell;
    color: black;
`

const StyledErrors = styled.div`
    color:red;
`

const StyledButton = styled.button`
    height: 2rem;
    width: 6rem;
    border-radius: 8px;
    color: rgb(30, 220, 20);
    background-color: white;
    border: 2px solid rgb(30, 220, 20);
        &:hover {
        cursor: pointer;
        }
        &:disabled {
        color: crimson;
        background-color: white;
        border: 2px solid crimson;
        cursor: not-allowed;
        }
`

export default function Form(props) {

    const { values, update, submit, errors, disabled } = props //receiving props

    //create a function to handle changing information inside the inputs (fixed to work with checkbox)
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }
    //create a function to handle submit that won't refresh the page
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <StyledForm onSubmit={onSubmit}>
          <StyledFormContainer>
            <h2>Create a New User</h2>
            <StyledErrors>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </StyledErrors>
            <label>Name:
                <input type='text' name='name' placeholder='Enter name' value={values.name} onChange={onChange}/>
            </label>
            
            <label>Email:
                <input type='email' name='email' placeholder='Enter email' value={values.email} onChange={onChange} />
            </label>

            <label>Password:
                <input type='password' name='password' placeholder='Enter password' value={values.password} onChange={onChange} />
            </label>

            <label>Terms of Service:
                <input type='checkbox' name='terms' checked={values.terms} onChange={onChange} />
            </label>
          </StyledFormContainer>
            <StyledButton id='submit' disabled={disabled}>Submit</StyledButton>
        </StyledForm>
    )
}
