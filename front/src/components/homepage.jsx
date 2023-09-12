import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Home = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState(""); // State pour stocker le nom d'utilisateur

    useEffect(() => {
        // Envoyez une requête pour récupérer l'utilisateur connecté
        axios
          .get("http://localhost:3000/user")
          .then((response) => {
            console.log(response.data); // Affichez la réponse pour comprendre sa structure
            setUsername(response.data.username); // Mettre à jour le state avec le nom d'utilisateur
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

     // Fonction de déconnexion
  const logout = () => {
    // Supprimez le token du localStorage (ou effectuez toute autre action de déconnexion nécessaire)
    localStorage.removeItem("token");
    // Redirigez l'utilisateur vers la page de connexion (ou toute autre page appropriée)
    navigate("/")
  };

  return (
    <div>
      {/* logout */}
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>

      <h1>Welcome {username}!</h1>

      <div>
        <Link to="/profile">
          <button>Profile</button>
        </Link>

        <Link to="/battle">
          <button>Fight!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;




// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {

//     return(
//         <div>
//             <h1>Welcome username!</h1>

//             <div>
//                 <Link to="/profile"><button>Profile</button></Link>
                
//                 <Link to="/battle"><button >Fight!</button></Link>
//             </div>
//         </div>
//     )
// }

// export default Home;