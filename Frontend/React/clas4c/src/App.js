import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About.js";
import Pagenotfound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
