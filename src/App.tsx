import "./App.css";
import Footer from "./components/Footer/Footer";
import Purchase from "./pages/Payments/Purchase/Purchase";
import Delivery from "./pages/Payments/Delivery/Delivery";
import Payment from "./pages/Payments/Payment/Payment";
import Collections from "./pages/Collections/Collections";
import Home from "./pages/Home/Home";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route, useNavigate } from "react-router-dom";
import Product from "./pages/Product/Product";
import { MyContextProvider } from "./API/Context";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login/Login";
// import { useEffect } from "react";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/");
  // }, []);

  return (
    <MyContextProvider>
      <ScrollToTop />
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/payment" element={<Purchase />} />
        <Route path="/payment/delivery" element={<Delivery />} />
        <Route path="/payment/pay" element={<Payment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </MyContextProvider>
  );
}

export default App;
