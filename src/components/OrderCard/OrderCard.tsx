import { Link } from "react-router-dom";
import "./OrderCard.css";
import { useState } from "react";



interface OrderCardProps {
  buttonText: string;
  path: string;
  disabled?: boolean;
  subtotal: number;
  totalAmount: number | undefined;
  freeDelivery?: boolean;
}

const OrderCard = ({
  buttonText,
  path,
  disabled,
  subtotal,
  freeDelivery
}: OrderCardProps) => {

  const deliveryFee = 3.95;


  const finalAmount = subtotal + (!freeDelivery && deliveryFee || 0);

  return (
    <div className="order-summary-container">
      <div className="order-summary-container__checkout">
        <div className="order-summary-container__checkout-container">
          <h1 className="container-heading">Order Summary</h1>
          <p className="container-paragraph">
            Subtotal<span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="container-paragraph">
            Delivery {freeDelivery ? <span style={{ color: "red", textDecoration: "line-through" }}>${deliveryFee}</span> : <span>${deliveryFee}</span>}
          </p>
        </div>
        <div>
          <p className="container-paragraph">
            Total<span>${finalAmount.toFixed(2)}</span>
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
