// import React from "react";
import { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState("")
    const word = text.split(" ").filter(x => x!= '').length;
      
    const uppercase=()=>{
        let newText=text.toUpperCase()
        setText(newText);
        props.alertms("Changed to UpperCase","info")
    }
  
    const removeSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.alertms("Extra spaces removed","info")
    }

    const copy=()=>{
      navigator.clipboard.writeText(text)
      props.alertms("text copied to clipboard","info")
    }
    const capitalize=()=>{
      let newText=text.split(". ");
      let b=newText.map((a)=>a.charAt(0).toUpperCase()+a.slice(1))
     setText(b.join(". "))
    }
  
    return (
    <> 
    <div className="container mt-5">
      <div className="mb-3" >
        <h2 className={`text-${props.mode === "dark"?"light":"dark"}`}>{props.heading}</h2>
        <textarea className="form-control" id="Textarea1" rows="8" value={text} onChange={(e)=>setText(e.currentTarget.value)} placeholder="Enter Your Text Here" ></textarea>
            <button type="submit" className="btn btn-primary mt-3" onClick={()=>{uppercase()}}>Change</button>
            <button type="submit" className="btn btn-primary mt-3 ms-3" onClick={()=>setText("")}>Clear</button> 
            <button type="submit" className="btn btn-primary mt-3 ms-3" onClick={()=>{removeSpace()}}>Remove Extra Space</button> 
            <button type="submit" className="btn btn-primary mt-3 ms-3" onClick={()=>{copy()}}>Copy</button> 
            <button type="submit" className="btn btn-primary mt-3 ms-3" onClick={()=>{capitalize()}}>Capitalize</button> 
      </div>
       
      
      <div className={`container my-2 text-${props.mode === "dark"?"light":"dark"}`}>
        <h3>Your text Summary</h3>
        <p>text area has {word} words and {text.length} Characters</p>
        <p>Average time to read this article is<b> {0.008*(text.split(" ").length)} </b> minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}
