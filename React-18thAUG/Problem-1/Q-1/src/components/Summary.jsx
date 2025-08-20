import React from "react";

function Summary({ totalPrice }) {
  console.log("Summary re-rendered");
  return <h3>Total Price of Visible Products: ${totalPrice}</h3>;
}

export default React.memo(Summary);
