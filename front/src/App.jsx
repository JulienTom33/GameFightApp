import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './components/startpage';
import Login from './components/authentication/loginpage';
import Register from './components/authentication/registerpage';
import Home from './components/homepage';
import Profile from './components/profilepage';
import Battle from './components/battle/battlepage';
import Arena from './components/battle/arenapage';
import Endgame from './components/battle/endgamepage';

const  App = () => {  

  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Start />} />     
        <Route path="/login" element={<Login />} />   
        <Route path="/register" element={<Register />} />  
        <Route path="/home" element={<Home />} />    
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/battle" element={<Battle />} /> 
        <Route path="/arena" element={<Arena />} /> 
        <Route path="/endgame" element={<Endgame />} /> 
      </Routes>
    </Router>
  );
}

export default App
