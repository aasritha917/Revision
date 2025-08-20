import React, { useMemo, useState } from "react";
import { products as dummyProducts } from "./data/products";
import ProductHeader from "./components/ProductHeader";
import ProductCard from "./components/ProductCard";
import Summary from "./components/Summary";

export default function App() {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...dummyProducts];
    if (filter) result = result.filter(p => p.category === filter);
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [filter, sort]);

  const totalPrice = useMemo(
    () => filteredProducts.reduce((sum, p) => sum + p.price, 0),
    [filteredProducts]
  );

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>

        <select onChange={e => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
      </div>

      <ProductHeader total={filteredProducts.length} activeFilter={filter} />
      <Summary totalPrice={totalPrice} />

      <div>
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
