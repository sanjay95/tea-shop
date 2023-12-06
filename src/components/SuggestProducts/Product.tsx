import "./SuggestProducts.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../API/Context";
import { ProductsAPI } from "../../API/ProductsAPI";

const Product = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [randomElements, setRandomElements] = useState<CartItem[]>([]);

  const ctx = useContext(MyContext);

  useEffect(() => {
    const randomElements = getRandomElementsFromArray(ProductsAPI);
    setRandomElements(randomElements);
  }, []);

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

  function getRandomElementsFromArray(array: CartItem[]) {
    if (3 >= array.length) {
      return array;
    }

    const randomElements = [];
    const copyOfArray = [...array];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * copyOfArray.length);
      const randomElement = copyOfArray.splice(randomIndex, 1)[0];

      randomElements.push(randomElement);
    }
    return randomElements;
  }

  const RandomElements = randomElements.map((i: CartItem, idx: number) => (
    <div className="item-container__tea" key={idx}>
      <div
        onMouseEnter={() => setHoveredItem(i.id)}
        onMouseLeave={() => setHoveredItem(null)}
        className="img-wrapper"
      >
        {hoveredItem === i.id ? (
          <div className="img-wrapper__details">
            <button className="img-wrapper__details-button">details</button>
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

  return <div className="item-container">{RandomElements}</div>;
};

export default Product;
