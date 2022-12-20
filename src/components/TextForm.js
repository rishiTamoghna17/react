import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText= text.toLocaleUpperCase();
    setText(newText);
  }
  const handleChangeing=(event)=>{
    setText(event.target.value);  
  }
  const[text,setText] = useState("Enter text here ");
  return (
    <>
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
      <button className="btn btn-primary"onClick={handleUpClick}>convert to uppercase</button>
    </>
  );
}
