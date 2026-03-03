import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logo from "../assets/ecom_logo.png";

function Header(){

  const name = localStorage.getItem("username");
  const navigate = useNavigate();

  // useEffect(() => {

  // const logoutButton = document.getElementById('logoutButton');
  //   const handleLogout = function() {

  //     // 1. Clear Local Storage
  //     localStorage.clear();

  //     // 2. Clear Session Storage
  //     sessionStorage.clear();

  //     window.location.href = '/home';
  //   };
  //   logoutButton?.addEventListener('click', handleLogout);

  //   return () => {
  //     logoutButton?.removeEventListener('click', handleLogout);
  //   };
  // }, []);


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");

    navigate("/");
  };

  return(
    <>
    <header>
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>E-Commerce Store</h1>
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product1">Products</Link>
      <Link to="/cart">Cart</Link>
      {/* <button id="logoutButton">Log Out</button> */}
      {name ? <button id="logoutButton" onClick={handleLogout}>Logout</button> : null}

    </nav>

    {/* <div id="user-display">Welcome, User</div> */}

    <div id="user-display">
        {name ? `Welcome, ${name}` : ""}
    </div>

    </header>
    </>
  )

}
export default Header