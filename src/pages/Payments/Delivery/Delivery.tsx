import { useContext, useState } from "react";
import OrderCard from "../../../components/OrderCard/OrderCard";
import PurchasePath from "../../../components/PurchasePath/PurchasePath";
import Address from "./Address";
import "./Delivery.css";
import { MyContext } from "../../../API/Context";

const Delivery = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const ctx = useContext(MyContext);
  const deliveryFee = 3.95;
  const totalAmount = ctx?.totalAmount ? ctx.totalAmount + deliveryFee : 0;
  console.log('context in /Payment/Delivery', ctx);



  return (
    <div className="container delivery">
      <PurchasePath style={true} />
      <div className="delivery-box">
        <Address onFormValidityChange={(isValid) => setFormIsValid(isValid)} />
        <OrderCard
          subtotal={ctx?.totalAmount||0}
          totalAmount={parseInt(totalAmount.toFixed(2))}
          disabled={!formIsValid}
          path="/payment/pay"
          buttonText="go to payment"
          freeDelivery={ctx?.freeDelivery}
        />
      </div>
    </div>
  );
};

export default Delivery;
