import "./Item.css";
import { useContext, useState } from "react";
import { MyContext } from "../../../API/Context";
import { ProductsAPI } from "../../../API/ProductsAPI";
import { Link } from "react-router-dom";

const Item = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const ctx = useContext(MyContext);

  const hoverHandler = (id: number) => {
    setHoveredItem(id);
  };

  const mouseLeaveHandler = () => {
    setHoveredItem(null);
  };

  interface CartItem {
    img: string;
    price: number;
    servingSize: number;
    species: string;
    id: number;
  }

  const addToCart = (id: CartItem) => {
    ctx?.addToCarthandler(id);
    console.log(ctx?.bagList);
  };

  const items = ProductsAPI.map((i: CartItem, idx: number) => (
    <div className="item-container__tea" key={idx}>
      <div
        onMouseEnter={() => hoverHandler(idx)}
        onMouseLeave={mouseLeaveHandler}
        className="img-wrapper"
      >
        {hoveredItem === idx ? (
          <div className="img-wrapper__details">
            <Link
              to={`/product/${i.id}`}
              className="img-wrapper__details-button"
            >
              details
            </Link>
            <button
              onClick={() => addToCart(i)}
              className="img-wrapper__details-button"
            >
              Add To Bag
            </button>
          </div>
        ) : (
          ""
        )}

        <img className="item-container__tea-img" src={i.img} />
      </div>
      <p className="item-container__tea-name">{i.species}</p>
      <div className="price-container">
        <p className="item-container__tea-price">${i.price}</p>
        <p className="item-container__tea-serving">/{i.servingSize}g</p>
      </div>
    </div>
  ));

  return <div className="item-container">{items}</div>;
};

export default Item;
