import { Routes, Route, HashRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Product1 from "./components/Product1"
import Login from "./components/Login"
import Cart from "./components/Cart"
import "./components/style.css"
import Signup from "./components/Signup"
import AdminDashboard from "./components/AdminDashboard"
import AdminLogin from "./components/AdminLogin"
import Payment from "./components/Payment"

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
      <Footer />
    </>
  )
}

export default App
