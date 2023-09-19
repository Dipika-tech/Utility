import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function TextForm(props) {
  const [mode, showAlert, heading, text, setText] = useOutletContext();
  
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleUpClick = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.toUpperCase();
      setText(newText)
      showAlert("Converted to uppercase!!", "success")
    }
  }

  const handleLowClick = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.toLowerCase();
      setText(newText)
      showAlert("Converted to lowercase!!", "success")
    }
  }

  const handleCapClick = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = capitalizeWords(text);
      setText(newText)
      showAlert("Converted to Camelcase!!", "success")
    }
  }

  const handleClearText = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      setText('')
      showAlert("Text Cleared!!", "success")
    }
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      navigator.clipboard.writeText(text)
      showAlert("Copied to clipboard!!", "success")
    }
  }

  const handleExtraSpace = () => {
    if(text===""){
      showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      showAlert("Remove extra spaces!!", "success")
    }
  }

  return (
    <>
      <div className='container' style={{color: mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" 
      value={text}
      onChange={handleOnChange}
      style={{backgroundColor: mode==='light'?'white':'#13466e', color: mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercaes</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Convert to CaptilizedCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove extra spaces</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear text</button>


      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
      </div>
      </div>
    </>
);
}
