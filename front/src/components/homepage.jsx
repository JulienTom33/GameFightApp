import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div>
            <h1>Welcome username!</h1>

            <div>
                <Link to="/profile"><button>Profile</button></Link>
                
                <Link to="/battle"><button >Fight!</button></Link>
            </div>
        </div>
    )
}

export default Home;