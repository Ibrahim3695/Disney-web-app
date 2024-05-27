import React, { useState } from 'react'

const Test = ({ text, textButton, text2 }) => {
    let verify = "ibrahim"
    const [toggle, setToggle] = useState(true)
    

    return (
        <div>
            <h1>
                {
                    verify === "ibrahims" ? "BAstard" : text
                }
                {/* {text} */}
            </h1>
            <button onClick={() => setToggle(!toggle)}>{
                toggle ? textButton : (<h1>{text2}</h1>) 
            }</button>
        </div>
    )
}

export default Test
