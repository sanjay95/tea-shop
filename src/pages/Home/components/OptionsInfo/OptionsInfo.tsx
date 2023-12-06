import "./OptionsInfo.css";
import tea from "../../../../images/icons/local_cafe.png";
import shipping from "../../../../images/icons/local_shipping.png";
import redeem from "../../../../images/icons/redeem.png";
import sell from "../../../../images/icons/sell.png";

export default function OptionsInfo() {
  return (
    <div className="options-info">
      <div className="container">
        <div className="options-main">
          <div className="options">
            <div className="option">
              <img src={tea} alt="Tea" />
              <p>450+ KIND OF LOOSEF TEA</p>
            </div>
            <div className="option">
              <img src={redeem} alt="Shipping" />
              <p>CERTIFICATED ORGANIC TEAS</p>
            </div>
            <div className="option">
              <img src={shipping} alt="tea" />
              <p>FREE DELIVERY</p>
            </div>
            <div className="option">
              <img src={sell} alt="tea" />
              <p>SAMPLE FOR ALL TEAS</p>
            </div>
          </div>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}
