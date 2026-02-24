import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./admin.css"

function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Hardcoded admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true")
      navigate("/admin/dashboard")
    } else {
      alert("Invalid Admin Credentials")
    }
  }

  return (
    <div className="admin-login-container">
      <form className="admin-login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
