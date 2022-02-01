import DropDown from "../components/DropDown"
import {Link} from "react-router-dom"
import React from 'react';
const Drop = () => {
    return ( 
        <div>
            <h2>Här kommer en Dropdown</h2>
            <h3>Välj färg på din Banan!!!</h3>
            <select name="ColorofCrap" id="color-select">
                <option value="">--Please choose an option--</option>
                <option value="Brown">Brown</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
                <option value="DarkBrown">Darkbrown</option>
            </select>
            <DropDown/>
            <Link to="/"><button>Back</button></Link>
        </div>
     );
}
 
export default Drop;