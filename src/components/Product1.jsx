import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Product1 () {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()

            const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}

            // Step 1: Merge original + edited
            let merged = data.products.map(product => {
            if (storage[product.id]) {
                return { ...product, ...storage[product.id] }
            }
            return product
            })

            // Step 2: Add new products created by admin
            const newProducts = Object.values(storage).filter(p => p.isNew)

            merged = [...merged, ...newProducts]

            // Step 3: Remove deleted products
            merged = merged.filter(p => !p.deleted)

            // Step 4: Remove hidden products
            merged = merged.filter(p => !p.hidden)

            setProduct(merged)
        }

        loadProducts()
        }, [])




    const handleAddToCart = (p)=> {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

        if(isLoggedIn=="true"){

            /*These three lines add the products into the cart*/
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            cartData.push(p);
            localStorage.setItem("cart", JSON.stringify(cartData));


            navigate("/cart");
        } else {
            alert("You have to login first!");
            navigate("/login")
        }
    };


    return(
        <>

                <section className="products">
        {product.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
            {/* <button onClick={() => handleAddToCart(p)}>Add to Cart</button> */}
            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </section>

        
        </>
    )
}

export default Product1