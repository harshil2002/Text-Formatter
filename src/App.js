import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //Whether dark is enable or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amzing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);


    }
  }
  return (
    <>
    <Router>
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>

       <div className="container my-3">
       <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          
          <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze Below :)" mode={mode}/>
          </Route>
         </Switch>
         {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze Below :)" mode={mode}/> */}

       </div>
    </Router>
          
         

    </>
  );
}

export default App;
