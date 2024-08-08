import React, { useState } from 'react';
import './App.css';
import About from './components/About.mjs';
import Navbar from './components/Navbar.mjs';
import Textform from './components/Textform.mjs';
import Alertweb from './components/Alertweb';



function App() {
   const [mode,setMode]= useState('dark');//wheather darkmode on or not
   const [alert,setalert]=useState(null);
   const showalert=(messege,type)=>{
     setalert({
      msg:messege,
      type:type
      })
      setTimeout(()=>{//after 3 sescond alert messege will be deleted
        setalert(null);
      },3000);
    

   };
   const pmode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enabled","success")
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#031C81 ';
      showalert("Dark mode enabled","success")
    }
   };
  return (
  <>
<Navbar title="aritra" mode={mode} pmode={pmode}></Navbar>
<Alertweb alert={alert}></Alertweb>
<div className="container">
<Textform header="TEXT CONVERTER" mode={mode} showalert={showalert}></Textform>
</div>
<div className="container">
  <About></About>
</div>

</>
    
  );
  
}

export default App;
