import { useNavigate } from "react-router-dom"

function Content() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <h1>Welcome to MyShop!</h1>
      <p>Your one-stop destination for quality products</p>
      <button onClick={() => navigate("/product1")}>
        Shop Now
      </button>
    </section>
  )
}

export default Content
