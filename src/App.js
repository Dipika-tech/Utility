import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import TextForm from './components/TextForm';
import { Outlet } from "react-router-dom";




export default function App() {
 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState('');
   
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type 
    })
  
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')
  // }
  
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#072442';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>

    <div id="detail">
    <Outlet context={[mode, showAlert, "Enter text to analyze", text, setText]}/>
    </div>
    {/* <div className="container"><TextForm mode={mode} showAlert={showAlert} heading="Enter text to analyze"/></div> */}
    </>
    
  );
}

