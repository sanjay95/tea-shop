import "./Product.css";

import globalIcon from "../../images/icons/language.png";
import organicIcon from "../../images/icons/redeem.png";
import ecoIcon from "../../images/icons/language.png";
import mall from "../../images/icons/local_mall-white.png";
import increment from "../../images/icons/increment.png";
import decrement from "../../images/icons/decrement.png";

import { useContext, useState } from "react";
import { ProductBagAPI } from "../../API/ProductBagAPI";
import MoreInfo from "./MoreInfo/MoreInfo";
import SuggestProducts from "../../components/SuggestProducts/SuggestProducts";
import { useParams } from "react-router-dom";

import { ProductsAPI } from "../../API/ProductsAPI";
import { MyContext } from "../../API/Context";

export default function Product() {
  const [activeWeight, setActiveWeight] = useState(0);

  const ctx = useContext(MyContext);
  const { id } = useParams();

  const idValidity = () => {
    if (id !== undefined) {
      return parseInt(id);
    }
  };

  const singleProduct = ProductsAPI.find((i) => i.id === idValidity());

  return (
    <div className="product-main">
      <div className="container">
        <div className="product-info-flex">
          <div className="product-image">
            <img src={singleProduct?.img} alt="" />
          </div>
          <div className="product-info">
            <h1>{singleProduct?.species}</h1>
            <p>A lovely warming Chai tea with ginger cinnamon flavours.</p>
            <div className="icons-flex">
              <div>
                <img src={globalIcon} alt="" />
                <p>Origin: Iran</p>
              </div>
              <div>
                <img src={organicIcon} alt="" />
                <p>Organic</p>
              </div>
              <div>
                <img src={ecoIcon} alt="" />
                <p>Vegan</p>
              </div>
            </div>
            <h1>€{singleProduct?.price}</h1>
            <div className="variants">
              <p>Variants</p>
              <div className="variants-flex">
                {ProductBagAPI.map((e, i) => (
                  <div
                    onClick={() => setActiveWeight(i)}
                    key={i}
                    className={`variant ${activeWeight === i ? "active" : ""}`}
                  >
                    <img src={e.image} alt={e.weight} />
                    <p>{e.weight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="info-footer">
              <div className="quantity">
                <img src={decrement} alt="" />
                <p>1</p>
                <img src={increment} alt="" />
              </div>
              <button
                onClick={() =>
                  singleProduct && ctx?.addToCarthandler(singleProduct)
                }
              >
                <img src={mall} alt="" /> ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
      <MoreInfo />
      <SuggestProducts />
    </div>
  );
}
