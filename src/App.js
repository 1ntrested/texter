//import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
   const[mode,setMode]=useState('light');

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
   }
  return (
    <div className="App">
      <Navbar title="Texter" id="Home" mode={mode} toggleMode={toggleMode}/>
      <div className=" container my-3 ">
        <TextForm  head="Enter your text" mode={mode}/>
      </div>
      
    </div>
  );
}

export default App;
