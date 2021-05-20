import React, {useState, useEffect} from 'react'
import './App.css';
import User from './components/User'
import Form from './components/Form' //imported Form.js to my App.js
import schema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

    //Initial states
    const initialFormValues = {
      //text inputs
      name: '',
      email: '',
      password: '',
      //checkbox
      terms: false,
  }
  const initialFormErrors = {
      name: '',
      email: '',
      password: '',
  }

  const initialUser = []
  const initialDisabled = true

function App() {
     //states
     const [users, setUsers] = useState(initialUser)
     const [formValues, setFormValues] = useState(initialFormValues)
     const [formErrors, setFormErrors] = useState(initialFormErrors)
     const [disabled, setDisabled] = useState(initialDisabled)


     //helpers
     const getUsers = () => {
      axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log('GET res.data.data: \n', res.data.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        debugger
        console.log(err)
      })
     }

     const postNewUser = newUser => {
       axios.post('https://reqres.in/api/users', newUser)
       .then(res => {
         console.log('POST res.data:\n', res.data)
         setUsers([...users, res.data])
         
       })
       .catch(err => {
         debugger
         console.log(err)
       })
       setFormValues(initialFormValues)
     }

     const validate = (name, value) => {
       yup
       .reach(schema, name)
       .validate(value)
       .then( validate => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
       })
       .catch(err => {
         setFormErrors({
           ...formErrors,
           [name]: err.errors[0]
         })
       })
     }

     //event handlers
     const inputChange = (name, value) => {
       validate(name, value)
       setFormValues({
         ...formValues,
         [name]: value
       })
     }

     const formSubmit = () => {
       const newUser = {
         first_name:formValues.name.trim(),
         email: formValues.email.trim(),
         password: formValues.password,
         terms: formValues.terms
       }
       postNewUser(newUser)
     }

     //side effects
     useEffect(() => {
       getUsers()
     }, [])

     useEffect(() => {
       schema.isValid(formValues).then(valid => {
         setDisabled(!valid);
       });
     }, [formValues]);

  return (
    <div className="App">
      <header><h1>User Onboarding</h1></header>

      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      /> {/*placed my Form inside my JSX */}

      {
        users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
