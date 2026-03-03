import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Captcha from "./Captcha";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [captchaInput, setCaptchaInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  // const handleLogin = () => {
  //   // Simple validation (you can connect DB later)
  //   if (username === "prajwal" && password === "123") {
  //     localStorage.setItem("isLoggedIn", "true");
  //   localStorage.setItem("username", username);  
  //     navigate("/products");
  //   } else {
  //     alert("Invalid username or password");
  //   }
  // };

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleLogin = () => {
  // Check captcha FIRST
  if (captchaInput !== generatedCaptcha) {
    alert("Invalid Captcha!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (validUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    navigate("/products");
  } else {
    alert("Invalid username or password");
  }
};
    return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Welcome Back 👋</h2>
          <p className="login-subtitle">Please login to continue</p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Captcha
            onChange={(input, generated) => {
              setCaptchaInput(input);
              setGeneratedCaptcha(generated);
            }}
          />

          <button onClick={handleLogin}>Login</button>

          <p>
            New User? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
}


export default Login;