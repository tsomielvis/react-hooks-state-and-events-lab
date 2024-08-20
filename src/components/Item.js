// src/components/Item.js
import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name} - {category}
      <button onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;