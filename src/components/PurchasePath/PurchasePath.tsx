import "./PurchasePath.css";

interface pathStyle {
  style?: boolean;
  paymentStyle?: boolean;
}

const PurchasePath = ({ style, paymentStyle }: pathStyle) => {
  return (
    <div className="purchase-container">
      <p className="my-bag__text">1.MyBag</p>
      <span
        style={style ? { border: "1px solid black" } : {}}
        className="delivery-line"
      ></span>
      <p style={style ? { color: "black" } : {}} className="delivery-text">
        2.delivery
      </p>
      <span
        style={paymentStyle ? { border: "1px solid black" } : {}}
        className="payment-line"
      ></span>
      <p
        style={paymentStyle ? { color: "black" } : {}}
        className="payment-text"
      >
        3.review&payment
      </p>
    </div>
  );
};

export default PurchasePath;
