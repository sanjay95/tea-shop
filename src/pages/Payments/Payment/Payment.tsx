import OrderCard from "../../../components/OrderCard/OrderCard";

import PaymentDetails from "./PaymentDetails/PaymentDetails";
import "./Payment.css";
import PaymentType from "./PaymentType/PaymentType";
import PurchasePath from "../../../components/PurchasePath/PurchasePath";
import { useContext } from "react";
import { MyContext } from "../../../API/Context";

const Payment = () => {
  const ctx = useContext(MyContext);
  return (
    <div className="container payment">
      <PurchasePath paymentStyle={true} style={true} />
      <div className="flex">
        <PaymentDetails />
        <PaymentType />
        <OrderCard
          subtotal={ctx?.totalAmount}
          totalAmount={
            ctx?.totalAmount ? parseInt((ctx.totalAmount + 3.95).toFixed(2)) : 0
          }
          path=""
          buttonText="pay"
        />
      </div>
    </div>
  );
};

export default Payment;
