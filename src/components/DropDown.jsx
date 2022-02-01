import React from 'react';
import { useState } from 'react';
const DropDown = () => {
    const [value,setValue] = useState("");
    return (
        <div>
            <button onClick={() =>{
                let valueChosen = document.getElementById("color-select").value;
                setValue(valueChosen);
            }}>Get Colour on your Bananaaaaaa</button>
            {value && <p>You choose {value} as colour on your Banana!!</p>}
            
        </div>
      );
}
 
export default DropDown;
