import React from "react";

function ProductHeader({ total, activeFilter }) {
  console.log("ProductHeader re-rendered");
  return (
    <div>
      <h2>Total Products: {total}</h2>
      <p>Active Filter: {activeFilter || "None"}</p>
    </div>
  );
}

export default React.memo(ProductHeader);
