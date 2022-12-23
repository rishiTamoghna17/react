import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert("conveted to uppercase","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("conveted to lowercase","success")
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("clean th text","success")
  };
  
  const handleChangeing = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here ");
  return (
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            onChange={handleChangeing}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-warning mx-3" onClick={handleLowClick}>convert to toLowerCase</button>
        <button className="btn btn-success " onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>
          <u>TEXT SUMMARY</u>
        </h2>
        <p>
          {text.split(" ").length}words and {text.length}charecters present here
        </p>
        <h3>
          <u>PREVIEW TEXT</u>
        </h3>
        <p>{text.length>0?text:"enter something to preview"}</p>
      </div>
    </>
  );
}
