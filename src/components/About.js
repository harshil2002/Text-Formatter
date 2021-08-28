// import React, {useState} from 'react'
import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState(
    // {
    //     color: 'white',
    //     backgroundColor: 'black'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }

    // const [btntext, setBtnText] = useState("Enable Light Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


    return (
    <div className="container">
       <h2 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h2>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                orTextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count orTextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count orTextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
            </div>
        </div>

        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
        </div> */}
    </div>
    )
}


