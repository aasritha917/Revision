import React from "react";
import CardNumberInput from "./components/CardNumberInput";

export default function App() {
  const handleCardChange = (digits) => {
    console.log("Raw card number:", digits);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <CardNumberInput onChange={handleCardChange} />
    </div>
  );
}
