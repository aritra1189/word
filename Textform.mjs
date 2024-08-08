import React, { useState } from 'react';
import './textform.css';
export default function Textform(props) {
  const [text, setText] = useState("Enter the text here");

  const handleChange = (event) => {
    console.log("Text is being changed");
    setText(event.target.value);
  };

  const handleUppercase = () => {
    console.log("Converting to uppercase");
    setText(text.toUpperCase());
   props.showalert("Changed to uppercase","success")
  };
  const lowercase = () =>{
    setText(text.toLowerCase());
    props.showalert("Changed to lowercase","success")
  };
  const clear = () =>{
    
    setText(' ');
    props.showalert("Text cleared","success")
  };
  const copytext=()=>{
  const newtxt = document.getElementById("my-box");
  newtxt.select();
  newtxt.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(newtxt.value).then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};
  
  return (
    <>
    <div className="continer"  >
      <h1 style={{color: props.mode === 'dark' ? 'white' : 'blue' }}>{props.header}</h1>
      <div className="mb-3">
      <textarea
  className="form-control"
  value={text}
  onChange={handleChange}
  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
  id="my-box"
  rows="8"
>
</textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercase}>CONVERT TO UPPERCASE</button>
      <button className="btn btn-primary" onClick={lowercase}>convert to lowercase</button>
      <button className="btn btn-primary" onClick={clear}>Clear Text</button>
      <button className="btn btn-primary" onClick={copytext}>Copy Text</button>
      </div>
      <div className="container my-3"  style={{color: props.mode === 'dark' ? 'black' : 'orange' }}>
        <h1>your text summery</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <h1>TIME PREVIEW</h1>
        <p>{.008*text.split(" ").length} seconds needed to read this</p>
        <h1>text preview</h1>
        <p>{text.length===0?"Enter text to preview it":text}</p>
        </div>
        </>
      
    
  );
}
