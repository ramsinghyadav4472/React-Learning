import React, { useState, useEffect } from "react";

export default function FetchApi() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products)
            });
    }, []); //dependency array
    return (
        <div>
            <h1>Fetch Api</h1>
            <h2>Products ({products.length})</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
                        <img src={product.thumbnail} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <strong>{product.title}</strong>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
