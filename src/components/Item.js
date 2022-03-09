import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);
  const cart = inCart ? "in-cart" : "";

  function handleCart(){
    setCart(inCart => !inCart)
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
