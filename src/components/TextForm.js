import React, { useState } from "react";

export default function TextForm(props) {
  const convertToUpper = () => {
    //    console.log('convert to uppercase' + text);
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to Uppercase!","success");
  };
  const convertToLower = () => {
    //    console.log('convert to lowercase' + text);
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to Lowercase!","success");
  };
  const textClear = () => {
    //    console.log('clear to all' + text);
    let newTxt = "";
    setText(newTxt);
    props.showAlert("All Text Cleard!","success");

  };
  const textCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard!","success");

  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!","success");

  }
  const convertToChange = (event) => {
    // console.log('To Change');
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={convertToChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={convertToUpper}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={convertToLower}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={textClear}>
          Clear All
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={textCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button> 
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter( (element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter( (element)=>{return element.length!==0}).length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
