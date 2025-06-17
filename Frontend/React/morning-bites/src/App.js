import { useState } from "react";
import "./components/card.css"
import Navbar from "./components/Navbar.js";
import Variable  from './utiles/Variable.js'
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import PageNotFound from "./pages/PageNotFound.js"
function App() {
  const [product,setproduct] = useState(Variable)
  console.log(product)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={product} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
