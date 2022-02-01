import React from "react"
import {Link} from "react-router-dom"


const Home = () => {
    return (  
        <div>
            <h3>Buttons!</h3>
            <Link to="/Check"><button>Go to CheckPage</button></Link>
            <Link to="/Drop"><button>Go to DropPage</button></Link>
            <Link to="/Radio"><button>Go to RadioPage</button></Link>
        </div>
    );
}
 
export default Home;