import { useState } from 'react'
import './App.css'

function App() {
  
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  function handleSubmit(e){
        e.preventDefault();
        if(value.email && value.firstname && value.lastname){
          setFormValid(true);
        }
        setSubmitted(true);
  }

  return (
    <div className="App">
      {submitted && formValid ? <div className='success'>Successfully Registered!</div> : null}

      <form onSubmit={handleSubmit}>

        <input type="text" 
        placeholder='First Name' 
        onChange={(e) => setValue({...value, firstname: e.target.value})}/>
        {submitted && !value.firstname ? <span>Please enter your email</span> : null}

        <input type="text" 
        placeholder='Last Name'
        onChange={(e) => setValue({...value, lastname: e.target.value})}/>
        {submitted && !value.lastname ? <span className='span'>Please enter your email</span> : null}

        <input type="email" 
        placeholder='E-mail'
        onChange={(e) => setValue({...value, email: e.target.value})}/>
        {submitted && !value.email ? <span>Please enter your email</span> : null}

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App
