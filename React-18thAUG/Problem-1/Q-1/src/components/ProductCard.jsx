import React from "react";

function ProductCard({ product }) {
  console.log("Rendered:", product.name);
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default React.memo(ProductCard);
