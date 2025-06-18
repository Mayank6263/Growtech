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
function App() {
  const [CartItem,SetCartItem]=useState([])
  const [product,setproduct] = useState(Variable)
  
  return (
    <div>
      <Navbar cartItem={CartItem}/>
      <Routes>
        <Route path="/" element={<Home data={product} SetCartItem ={SetCartItem} cartItem={CartItem} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItem={CartItem} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
