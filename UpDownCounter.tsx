import React from 'react'
import {useState} from "react"; 

export default function UpDownCounter() {
        const [count, setCount] = useState(0); 

        let styles = {
            color: "red", 
            height: 100
        }

    return (
       <div>
        <button onClick={() => {setCount(currentValue => currentValue + 1)}}>UP</button>
            <p style={styles}>{count}</p>
            <button onClick= {function(){setCount(function(prv){return prv -1})}}>DOWN</button>
        </div>
    )
}

// let count = 0; 
// let count1 = 0; 
// let count 2 = 0;
// document.querySelector("button")?.addEventListener("click", function(){
//     document.querySelector("p")?.innerText = count; 
//     count++