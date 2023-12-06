import { Link } from "react-router-dom";
import "./PaymentDetails.css";


const address = JSON.parse(sessionStorage.getItem("address")||'{}');

const PaymentDetails = () => {
  return (
    <div className="payment-details__container">
      <h1>Delivery Details</h1>
      <div>
        <p className="paragraph-heading">Shipping address</p>
        <p>{address.formatted},</p>
        <p>{address.locality}</p>
        <p>{address.postalCode}</p>
        <p>{address.country}</p>
       
      </div>
      <div>
        <p className="paragraph-heading">Billing address</p>
        <p>Same as shipping address</p>
      </div>
      <div>
        <p className="paragraph-heading">Contact information</p>
        <p>{address.email}</p>
      </div>
      <Link to="/payment/delivery">edit details</Link>
    </div>
  );
};

export default PaymentDetails;
