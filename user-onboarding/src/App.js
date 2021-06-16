import logo from './logo.svg';
import './App.css';
import Form from './components/Form'; //imported Form
import axios from 'axios' //imported Axios
import React, { useState } from 'react'; //imported React and useState
import User from './components/User';

//create an object with the initial form values
const initialFormValues = {
  //text inputs
  name: '',
  email: '',
  password: '',
  //checkbox
  terms: false,
}


function App() {

  //create state for form values
  const [ formValues, setFormValues ] = useState(initialFormValues)
  //create state for users
  const [ users, setUsers ] = useState([])

  //create a function to update the form (don't forget to pass it to Form through props)
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName] : inputValue})
  }

  //create a function to submit the form (don't forget to pass it to Form through props)
  const submitForm = () => {
    const newUser ={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    setUsers([newUser, ...users])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <div>
        <h1>User Onboarding</h1>
        <h2>Create a User:</h2>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
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
