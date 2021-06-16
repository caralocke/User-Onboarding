import './App.css';
import Form from './components/Form'; //imported Form
import axios from 'axios' //imported Axios
import React, { useState, useEffect } from 'react'; //imported React, useState, and useEffect
import User from './components/User'; //imported User
import * as yup from 'yup' //imported yup
import schema from './validation/formSchema'

//create an object with the initial form values
const initialFormValues = {
  //text inputs
  name: '',
  email: '',
  password: '',
  //checkbox
  terms: false,
}

//create an object with the initial form errors
const initialFormErrors ={
  name: '',
  email: '',
  password: '',
  terms: '',
}


function App() {

  //create state for form values
  const [ formValues, setFormValues ] = useState(initialFormValues)
  //create state for users
  const [ users, setUsers ] = useState([])
  //create state for form errors
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  //create state for disabling the form
  const [ disabled, setDisabled ] = useState(true)

  //create a function to validate the form
  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(validate => {
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, [name] : err.errors[0]
      })
    })
  }

  //create a function to update the form (don't forget to pass it to Form through props)
  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue) //invoke the validate function we made inside of the updateForm function
    setFormValues({...formValues, [inputName] : inputValue})
  }  

  //create a function to do a post request
  const postNewUser = newUser => {
    axios
    .post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      console.log(`Post res.data`, res.data)
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.log(`Here's where you messed up:\n`, err)
    })
    setFormValues(initialFormValues)
  }

  //create a function to submit the form (don't forget to pass it to Form through props)
  const submitForm = () => {
    const newUser ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser) //implement the function of posting a new user
  }

  //create a function to adjust the status of 'disabled' every time the 'formValues' changes (don't forget to pass the current 'disabled' to Form through props)
  useEffect(() =>{
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  },[formValues])

  return (
    <div className="App">
      <div>
        <h1>User Onboarding</h1>        
        <Form values={formValues} update={updateForm} submit={submitForm} errors={formErrors} disabled={disabled}/>
      </div>

      <div>
        <h2>Current Users:</h2>
        { 
          users.map(user => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
