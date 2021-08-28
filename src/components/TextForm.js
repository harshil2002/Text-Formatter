import React, {useState} from 'react'


export default function TextForm(props) {
  // Convert to Uppercase
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase!", "success");
  }

  // Convert to Lowercase
  const handleLwClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase!", "success");

  }

  // Clear Text
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear!", "success");

  }

  // Capital First Character
  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText= firstchar.toUpperCase(); // converting that to uppercase
    setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
    props.showAlert("First latter capitalize!", "success");

  }

  // Copy Text
  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to cliboard!", "success");

  }

  // Remove extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space!", "success");

    }
    
    

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); // correct way to change the state
    return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={capitalize}>Capital First Character</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra space</button>
        
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
      </>
    )
}

