import React, {useState} from 'react';
// import { useOutletContext } from "react-router-dom";

export default function TextForm(props) {
  // const [mode, showAlert, heading] = useOutletContext();
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleUpClick = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!!", "success")
    }
  }

  const handleLowClick = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!!", "success")
    }
  }

  const handleCapClick = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = capitalizeWords(text);
      setText(newText)
      props.showAlert("Converted to Camelcase!!", "success")
    }
  }

  const handleClearText = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      setText('')
      props.showAlert("Text Cleared!!", "success")
    }
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      var copy_text = document.getElementById('myBox')
      copy_text.select();
      navigator.clipboard.writeText(copy_text.value)
      props.showAlert("Copied to clipboard!!", "success")
    }
  }

  const handleExtraSpace = () => {
    if(text===""){
      props.showAlert("Enter some text to perform operation", "warning")
    }
    else{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Remove extra spaces!!", "success")
    }
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" 
      value={text}
      onChange={handleOnChange}
      style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercaes</button>
      <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to CaptilizedCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>


      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element) => element !== '').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element) => element !== '').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
      </div>
      </div>
    </>
);
}
