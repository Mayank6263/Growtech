import { createContext, useState } from "react";
import React from "react";
import Variable from "../utiles/Variable";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

export const mycontext = createContext();

const Mycontext = () => {
  const [CartItem, SetCartItem] = useState([]);

  const [track, settrack] = useState(true);
  let [count, setcount] = useState(1);

  function increament(product) {
    setcount(++product.quantity);
  }

  function decreament(product) {
    setcount(() => {
      if (product.quantity === 1) {
        removeFromCart(product.id);
        return;
      }
      return product.quantity--;
    });
  }
  function removeFromCart(id) {
    const filterval = CartItem?.filter((it) => {
      return it.id !== id;
    });
    SetCartItem(filterval);
  }

  function AddToCart(data) {
    console.log("onclicking", data);
    const clickit = CartItem?.some((item) => {
      return item?.id === data?.id;
    });
    SetCartItem((old) => {
      if (clickit) {
        alert("already clicked");
        return old;
      }

      return [...old, data];
    });
  }
  const user = {
    Variable,
    CartItem,
    SetCartItem,
    count,
    setcount,
    AddToCart,
    removeFromCart,
    track,
    settrack,
    decreament,
    increament,
  };
  return (
    <div>
      <mycontext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </mycontext.Provider>
    </div>
  );
};

export default Mycontext;
