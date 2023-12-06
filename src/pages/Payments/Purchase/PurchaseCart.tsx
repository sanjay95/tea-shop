import { useContext } from "react";
import CartItem from "../../../components/cart/CartItem";
import "./PurchaseCart.css";
import { MyContext } from "../../../API/Context";
import { Link } from "react-router-dom";

const PurchaseCart = () => {
  const ctx = useContext(MyContext);
  return (
    <div className="purchase-cart">
      <div className="purchase-cart-items">
        <CartItem />
      </div>
      <div className="purchase-cart__subtotal">
        <p className="purchase-cart__subtotal-text">
          subtotal<span>${ctx?.totalAmount.toFixed(2)}</span>
        </p>
        <Link
          to="/collections"
          onClick={() => console.log("clicked")}
          className="purchase-cart__button"
        >
          Back to shopping
        </Link>
      </div>
    </div>
  );
};

export default PurchaseCart;
