import { useState } from "react";
import "./components/card.css"
import Navbar from "./components/Navbar.js";
import Variable  from './utiles/Variable.js'
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import PageNotFound from "./pages/PageNotFound.js"
import Cart from "./pages/Cart.js"
import Mycontext from "./context/Mycontext.js";

function App() {
 

  
  
  return (
    <div>
    <Mycontext/>
      
    </div>
  );
}

export default App;
