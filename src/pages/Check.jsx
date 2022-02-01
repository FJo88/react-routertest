import React from 'react';
import {Link} from "react-router-dom"
import CheckBoxes from "../components/CheckBoxes"
const Check = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Här kommer en checkbox!</h2>
            <input type="checkbox"></input>
           
            <CheckBoxes/>
            <Link to="/"><button>Back</button></Link>
        </div>
      );
}
 
export default Check;