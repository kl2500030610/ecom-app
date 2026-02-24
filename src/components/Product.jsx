import { useNavigate } from 'react-router-dom';
import img1 from '../assets/pinephone.jpg';

function Product() {

  const navigate = useNavigate();

  const handleAddToCart = ()=> {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn=="true"){
      navigate("/cart");
    } else {
      alert("You have to login first!");
      navigate("/login")
    }
  };



  return (
    <section className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <img src={img1} />
          <h3>Product 1</h3>
          <p>$500</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={img1} />
          <h3>Product 2</h3>
          <p>$900</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={img1} />
          <h3>Product 3</h3>
          <p>$700</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </section>
  )
}

export default Product
