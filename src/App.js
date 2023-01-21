import "./App.css";
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/signup" element={<Signup/>}/>
      <Route  path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

      
    
    </>
  );
}


export default App;
