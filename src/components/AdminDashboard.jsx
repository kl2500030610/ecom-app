import { useEffect, useState } from "react"
import "./admin.css"

function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({
    title: "",
    price: "",
    thumbnail: ""
  })

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}

  let merged = data.products.map(product => {
    if (storage[product.id]) {
      return { ...product, ...storage[product.id] }
    }
    return product
  })

  const newProducts = Object.values(storage).filter(p => p.isNew)

  merged = [...merged, ...newProducts]

  setProducts(merged)
}


  const saveToStorage = (updatedProducts) => {
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts))
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setForm(product)
  }

  const saveEdit = () => {
    const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}
    storage[editingId] = { ...form }
    saveToStorage(storage)
    setEditingId(null)
    loadProducts()
  }

  const deleteProduct = (id) => {
    const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}
    storage[id] = { ...products.find(p => p.id === id), deleted: true }
    saveToStorage(storage)
    loadProducts()
  }

  const toggleHide = (product) => {
    const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}
    storage[product.id] = { ...product, hidden: !product.hidden }
    saveToStorage(storage)
    loadProducts()
  }

  const addProduct = () => {
    const storage = JSON.parse(localStorage.getItem("adminProducts")) || {}
    const newId = Date.now()

    storage[newId] = {
      id: newId,
      title: form.title,
      price: form.price,
      thumbnail: form.thumbnail,
      hidden: false,
      isNew: true
    }

    saveToStorage(storage)
    setForm({ title: "", price: "", thumbnail: "" })
    loadProducts()
  }

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <div className="add-product">
        <h2>Add Product</h2>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={form.thumbnail}
          onChange={e => setForm({ ...form, thumbnail: e.target.value })}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <div className="product-list">
        {products.map(product => (
          !product.deleted && (
            <div key={product.id} className="admin-card">

              {editingId === product.id ? (
                <>
                  <input
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                  />
                  <input
                    value={form.price}
                    onChange={e => setForm({ ...form, price: e.target.value })}
                  />
                  <button onClick={saveEdit}>Save</button>
                </>
              ) : (
                <>
                  <img src={product.thumbnail} alt="" />
                  <h3>{product.title}</h3>
                  <p>₹{product.price}</p>

                  {product.hidden && <p className="hidden-tag">Hidden</p>}

                  <div className="admin-buttons">
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    <button onClick={() => toggleHide(product)}>
                      {product.hidden ? "Unhide" : "Hide"}
                    </button>
                  </div>
                </>
              )}

            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard
