import { useState } from "react"


function TextForm(props) {

  const[text,setText]=useState("");

  function handleUpClick(){
   // console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
  }

 function handleOnChange(event){
   // console.log("onchange");
     setText(event.target.value);
  }

  function tolower(){
    let newtext1=text.toLowerCase();
    setText(newtext1);
  }

  function toRemoveDigit(){
    let matches = text.replace(/[0-9]/g, '');
  if(matches){
    setText(matches)
  }
    }
  
  function cleartext(){
     let newtext2='';
    setText(newtext2);
  }

function removeExtraSpaces(){
  let newtext3=text.split(/[ ]+/);
  setText(newtext3.join(" "));
}


  return ( 
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.head}</h1>
    <div className="mb-3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
    <textarea value={text}className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button type="button" class="btn btn-primary mx-2"  onClick={tolower}>Convert to lowercase</button>
    <button type="button" class="btn btn-primary mx-2" onClick={toRemoveDigit}>remove digit</button>
    <button type="button" class="btn btn-primary mx-2" onClick={cleartext}>Clear text</button>
    <button type="button" class="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
    </div>

    <div className=" container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <textarea  value={text.length>0?text:"Enter something in the text box above to preview it here"} className="form-control my-3"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
    </div>
    </>
  )
}

export default TextForm