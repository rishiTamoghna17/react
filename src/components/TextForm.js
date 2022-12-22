import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };
  
  const handleChangeing = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here ");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleChangeing}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-warning mx-3" onClick={handleLowClick}>convert to toLowerCase</button>
        <button className="btn btn-success " onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-3">
        <h1>
          <u>TEXT SUMMARY</u>
        </h1>
        <p>
          {text.split(" ").length}words and {text.length}charecters present here
        </p>
        <h2>
          <u>PREVIEW TEXT</u>
        </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
