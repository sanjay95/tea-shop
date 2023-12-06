import { Link } from "react-router-dom";
import "./OrderCard.css";

interface OrderCardProps {
  buttonText: string;
  path: string;
  disabled?: boolean;
  subtotal: number | undefined;
  totalAmount: number | undefined;
}

const OrderCard = ({
  buttonText,
  path,
  disabled,
  subtotal,
  totalAmount,
}: OrderCardProps) => {
  return (
    <div className="order-summary-container">
      <div className="order-summary-container__checkout">
        <div className="order-summary-container__checkout-container">
          <h1 className="container-heading">Order Summary</h1>
          <p className="container-paragraph">
            Subtotal<span>${subtotal}</span>
          </p>
          <p className="container-paragraph">
            Delivery<span>$3.95</span>
          </p>
        </div>
        <div>
          <p className="container-paragraph">
            Total<span>${totalAmount}</span>
          </p>
        </div>
        <div className="order-container">
          <p className="order-container__text">
            Estimated shipping time 2 days
          </p>
          <Link to={path}>
            <button disabled={disabled} className="order-container__button">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
