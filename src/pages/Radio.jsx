import Radiobuttons from "../components/RadioButtons"
import {Link} from "react-router-dom"
import React from 'react';
const Radio = () => {
    return ( 
        <div>
            <h2>Här kommer lite radiobuttons!</h2>
            <h3>Försök välja 2???</h3>
            <input type="radio" name="sven"></input>
            <input type="radio" name="sven"></input>
            <input type="radio" name="sven"></input>
            <input type="radio" name="sven"></input>
            <Radiobuttons/>
            <Link to="/"><button>Back</button></Link>
        </div>
     );
}
 
export default Radio;
