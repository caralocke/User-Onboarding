import React from 'react'

export default function Form(props) {

    const { values, update, submit, errors, disabled } = props //receiving props

    //create a function to handle changing information inside the inputs
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }
    //create a function to handle submit that won't refresh the page
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
          <div>
            <h2>Create a New User</h2>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
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
                <input type='checkbox' name='terms' value={values.terms} onChange={onChange} />
            </label>
          </div>
            <button id='submit' disabled={disabled}>Submit</button>
        </form>
    )
}
