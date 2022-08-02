import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Upper case was clicked" , text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        console.log("on Change");
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter Text here ');


  return (
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className='form-control' id='myBox' value= {text} onChange={handleOnChange} rows="20"></textarea>
        <button className='btn btn-primary' onClick={handleUpClick}>To Uppercase</button>

    </div>

    </div>
  )
}
