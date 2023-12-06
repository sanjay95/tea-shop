import "./PaymentType.css";
import img1 from "../../../../images/icons/paymentIcons/icon5.png";
import img2 from "../../../../images/icons/paymentIcons/icon2.png";
import img3 from "../../../../images/icons/paymentIcons/icon3.png";
import React, { useRef } from "react";

const PaymentType = () => {
  const expirationDateInputRef = useRef<HTMLInputElement>(null);
  const cvc = useRef<HTMLInputElement>(null);
  const inputRefs = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement>(null)
  );
  const cardNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "").slice(0, 4);

    if (numericValue.length === 4) {
      const formattedValue = numericValue;
      e.target.value = formattedValue;

      const nextInput = e.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      e.target.value = numericValue;
    }
  };

  const expirationChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "").slice(0, 4);

    if (sanitizedValue.length > 2) {
      const formattedValue =
        sanitizedValue.slice(0, 2) + "/" + sanitizedValue.slice(2);
      expirationDateInputRef.current!.value = formattedValue;
    } else {
      expirationDateInputRef.current!.value = sanitizedValue;
    }
  };

  const cvcChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    cvc.current!.value = numericValue;
  };

  return (
    <div className="payment-type__container">
      <h1>Payment Type</h1>
      <div className="card">
        <img src={img1} />
      </div>
      <div className="box">
        <div className="cards">
          <p>Credit or Debit Card</p>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
        <form id="digit">
          <label htmlFor="digit">
            <p>Card Number</p>
          </label>
          <div>
            {inputRefs.map((inputRef, index) => (
              <input
                key={index}
                ref={inputRef}
                placeholder="xxxx"
                className="digit-input"
                type="text"
                maxLength={4}
                onChange={cardNumberChangeHandler}
              />
            ))}
          </div>
        </form>
        <div className="card-details">
          <form>
            <label>
              <p>Expired date</p>
            </label>
            <input
              ref={expirationDateInputRef}
              id="expirationDate"
              placeholder="xx/xx"
              type="text"
              onChange={expirationChangeHandler}
            />
          </form>
          <form>
            <label>
              <p>CVC</p>
            </label>
            <input
              ref={cvc}
              maxLength={3}
              onChange={cvcChangeHandler}
              type="text"
            />
          </form>
        </div>
        <button>advanced payment</button>
      </div>
    </div>
  );
};

export default PaymentType;
