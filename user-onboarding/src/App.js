import logo from './logo.svg';
import './App.css';
import Form from './components/Form' //imported Form.js to my App.js
import schema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

function App() {
  return (
    <div className="App">
      <Form /> {/*placed my Form inside my JSX */}
    </div>
  );
}

export default App;
