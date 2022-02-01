import React from 'react';
import {useState} from "react";
const CheckBoxes = () => {
   
    const [count,setCount] = useState(0);
    
    return ( 
        <div>
        <button onClick={() => {
            let selectedAll = document.querySelectorAll('input[type="checkbox"]')
            selectedAll.forEach((select) =>{
                if(select.checked){
                    setCount(count + 1);
                }
            })
        }}> Click me</button>
        <p>You have clicked in on the button {count} times when the checkbox is checked!</p>
        </div>
     );
}
 
export default CheckBoxes
