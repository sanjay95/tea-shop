import { useContext, useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { MyContext } from "../../API/Context";
import { Link } from "react-router-dom";

interface CartProps {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Cart: React.FC<CartProps> = () => {
  const ctx = useContext(MyContext);

  const deliveryFee = 3.95;

  useEffect(() => {
    if (ctx?.openedCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [ctx?.openedCart]);

  return (
    <div
      className={`cart-container ${
        ctx?.openedCart ? "cart-container__visible" : ""
      }`}
      onClick={() => ctx?.cartOpenHandler()}
    >
      <div
        //this makes sure not to close cart modal on clicking cart
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="cart-container__cart"
        style={
          ctx?.openedCart ? { transform: "translateX(0)", opacity: "1" } : {}
        }
      >
        <button className="close-button" onClick={() => ctx?.cartOpenHandler()}>
          X
        </button>
        <div>
          <h1 className="my-bag">My Bag</h1>
        </div>
        <div className="items-wrapper">
          {ctx?.bagList.length === 0 ? (
            <p className="no-items">no items</p>
          ) : (
            <CartItem />
          )}
        </div>
        <div>
          <section className="amount-section1">
            <p className="amount-section1__subtotal">
              subtotal
              <span className="amount-section1__subtotal-amount">
                ${ctx?.totalAmount.toFixed(2)}
              </span>
            </p>
            <p className="amount-section1__fee">
              delivery
              <span className="amount-section1__fee-amount">
                ${deliveryFee}
              </span>
            </p>
          </section>
          <section className="amount-section2">
            <p className="amount-section2__total">
              total
              <span>
                $
                {ctx?.totalAmount
                  ? (ctx.totalAmount + deliveryFee).toFixed(2)
                  : 0}
              </span>
            </p>
            <Link
              to="/payment"
              onClick={ctx?.cartOpenHandler}
              className="amount-section2__button"
            >
              Purchase
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
