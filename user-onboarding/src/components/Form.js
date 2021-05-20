import React from 'react'
//created component file called Form.js


export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit =event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name,valueToUse)
    }
     return (
       <form className='form container' onSubmit={onSubmit}>
         <div className='form-group submit'>
            <h2>Add a User</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>

            <div> {/*Create areas on our form for each of our inputs needed */}
                <label>First Name
                    <input 
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    name='name'
                    />            
                </label>
            </div>
            <div>
                <label>Email
                    <input 
                    value={values.email}
                    type='text'
                    onChange={onChange}
                    name='email'                    
                    />            
                 </label>
            </div>
            <div>
                <label>Password
                    <input 
                    value={values.password}
                    type='password'
                    onChange={onChange}
                    name='password'
                    />            
                </label>
            </div>
            <div>
                <label>Terms of Service
                  <input 
                  checked={values.terms}
                  type='checkbox'
                  onChange={onChange}
                  name='terms'
                 />            
                 </label>
             </div>
           
             <button disabled={disabled}>submit</button>
         </div>
       </form>
    )
}
