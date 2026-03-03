import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 🔹 NEW: ensure each item has quantity
    const cartWithQty = cart.map(item => ({
      ...item,
       quantity: item.quantity || 1
    }));


    setCartItems(cartWithQty);
  }, []);


  /* Remove cart button */
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /* Increase quantity */
  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /* Decrease quantity */
  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };


  /* Total price */
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity;
  })


  return (
    <>

      <div style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center" }}>
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <div className="products">
            {cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 20px" }}>Item count: {item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>
                <button id="remBtn" onClick={() => removeFromCart(index)}>Remove from cart</button>
              </div>
            ))}
          </div>
        )}

        <h1>Total Price = ${totalPrice}</h1><br /><br />
        <button onClick={() => navigate('/payment')} style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}>
          Proceed to Payment
        </button>
      </div>

    </>
  );
}

export default Cart;