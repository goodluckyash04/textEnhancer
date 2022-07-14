import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
 const [dark, setDark] = useState("light")
 const [alert, setAlert] = useState(null)

 const alertmsg=(msg,type)=>{   
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(()=>setAlert(null),1000)
 }
 const darkmode=()=>{
         if(dark==="light"){
           setDark("dark") 
           document.body.style.backgroundColor="#212529"
           alertmsg("Dark Mode Enabled","success")
           document.title="Text Enhancer - Dark Mode"
           //to change title
          //  setInterval(() => {
          //   document.title="Dark Mode Enabled"
          //  }, 1000);
          //  setInterval(() => {
          //   document.title="Text Enhacer"
          //  }, 2000);
          }else{
            setDark("light")
            document.body.style.backgroundColor="white"
            alertmsg("Dark Mode Disabled","success")
            document.title="Text Enhancer"
          
 }
}
  return (
    <>
   <BrowserRouter>
   <Navbar mode={dark} darkmode={darkmode} />
   <Alert alert={alert}/>
    <Routes>
      <Route path="/" element={<TextArea heading="Enter data" mode={dark} alertms={alertmsg}/>}></Route>
      <Route exact path="/about" element={<About mode={dark}/>}></Route>
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
