import "./CartItem.css";

import { useContext } from "react";
import { MyContext } from "../../API/Context";

const CartItem = () => {
  const ctx = useContext(MyContext);
  console.log(ctx?.bagList);

  const handleIncrement = (item: any) => {
    ctx?.addToCarthandler(item);
  };

  const handleDecrement = (id: number) => {
    ctx?.decrementItemAmount(id);
  };

  const cartItem = ctx?.bagList.map((i, idx: number) => (
    <div key={idx} className="cart-item">
      <img src={i.img} />
      <div className="cart-item__content">
        <div>
          <p>{i.species}</p>
          <p>Chai Tea / {i.servingSize}</p>
          <button
            onMouseEnter={() => console.log("hovered")}
            className="cart-item__content-button"
            onClick={() => ctx?.removeFromCartHandler(i.id)}
          >
            REMOVE
          </button>
          <p className="cart-item__content-span">${i.price}</p>
        </div>
        <div className="cart-item__content-actions">
          <button
            onClick={() => handleDecrement(i.id)}
            className="cart-item__content-actions-button"
          >
            -
          </button>
          <p>{i.amount}</p>
          <button
            onClick={() => handleIncrement(i)}
            className="cart-item__content-actions-button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  ));

  return cartItem;
};

export default CartItem;
