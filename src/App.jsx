import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./routes/Home/Home.jsx";
import Store from "./routes/Store/Store.jsx";
import About from "./routes/About/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Cart from "./routes/Cart/Cart.jsx";
import CartBtn from "./components/CartBtn/CartBtn.jsx";
import "./main.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="store"
            element={<Store cart={cart} setCart={setCart} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <CartBtn cart={cart} />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
