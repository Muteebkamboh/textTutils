import Navbar from './components/Navbar'
import Text from './components/Text'
import About from './components/About'
import React, { useState } from 'react';
import Alert from './components/Alert'
import {  BrowserRouter as Router, Switch, Route,} from 'react-router-dom';


import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) =>{
      setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-rounded')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if ( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "Success")
    }
  }
  return (
    <>
    <Router>
      <Navbar Home="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
        <Route path="/">
        <Text showAlert={showAlert} heading="Enter the text to analyze below " mode={mode} />
        </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
