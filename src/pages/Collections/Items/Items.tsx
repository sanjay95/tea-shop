import "./Items.css";
import img from "../../../images/products/Rectangle.png";
import Filter from "./Filter";
import Item from "./Item";

const Items = () => {
  return (
    <div className="items-container">
      <img src={img} className="items-container__img" alt="fine-brewed tea" />
      <div className="items-container__path">home/collections/chai</div>
      <div className="items-container__content">
        <Filter />
        <Item />
      </div>
    </div>
  );
};

export default Items;
