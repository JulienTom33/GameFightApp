import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './components/startpage';
import Login from './components/authentication/loginpage';
import Register from './components/authentication/registerpage';

const  App = () => {  

  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Start />} />     
        <Route path="/login" element={<Login />} />   
        <Route path="/register" element={<Register />} />    
      </Routes>
    </Router>
  );
}

export default App
