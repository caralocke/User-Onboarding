import React, {useState, useEffect} from 'react'
import './App.css';
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
     const [user, setUser] = useState(initialUser)
     const [formValues, setFormValues] = useState(initialFormValues)
     const [formErrors, setFormErrors] = useState(initialFormErrors)
     const [disabled, setDisabled] = useState(initialDisabled)

  return (
    <div className="App">
      <Form /> {/*placed my Form inside my JSX */}
    </div>
  );
}

export default App;
