import React from "react";
import { Link } from "react-router-dom";

const Battle = () => {

    return (
        <div>
            <h1>ici c'est la bagarre</h1>
            <Link to="/arena"><button>Ready to fight!</button></Link>
        </div>
    )
}

export default Battle;