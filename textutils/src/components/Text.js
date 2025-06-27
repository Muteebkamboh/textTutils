import React, { useState } from 'react'


export default function Text(props) {
  const handleUpClick = () => {
    console.log("handleUp was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upparCase!", "Success")
  }
  
  const handleLoClick = () => {
    console.log("handleUp was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "Success")
  }
  
  const handleClearClick = () => {
     let newText = (" "); 
     setText(newText);
     props.showAlert("Text is cleared", "Success")
    }
    
    const handleOnChange = (event) => {
      console.log("On Change")
      setText(event.target.value)
      // props.showAlert("Text is changed", "Success")
    }
    
    const handleCopyClick= () => {
      var copyText = document.getElementById("MyBox")
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text is copied", "Success")
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white' : '#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color: props.mode==='dark'?'white' : '#042743'}} id="MyBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Upparcase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick} >Copy text</button>
      </div>

      <div className="container my-2" style={{color: props.mode==='dark'?'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter your text to preview here... "}</p>
      </div>
    </>
  )
}
