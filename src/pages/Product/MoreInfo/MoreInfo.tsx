import "./MoreInfo.css";
import kettle from "../../../images/icons/kettle.png";
import water from "../../../images/icons/water_voc.png";
import alarm from "../../../images/icons/alarm.png";
import ellipse from "../../../images/icons/Ellipse 2.png";
export default function MoreInfo() {
  return (
    <div className="product-more-info">
      <div className="container">
        <div className="more-info-flex">
          <div className="instructions-main">
            <h1>Steeping instructions</h1>
            <div className="instruction">
              <img src={kettle} alt="" />
              <span>
                SERVING SIZE:
                <p>2 tsp per cup, 6 tsp per pot</p>
              </span>
            </div>
            <div className="instruction">
              <img src={water} alt="" />
              <span>
                WATER TEMPERATURE:
                <p>100°C</p>
              </span>
            </div>
            <div className="instruction">
              <img src={alarm} alt="" />
              <span>
                STEEPING TIME:
                <p>3 - 5 minutes</p>
              </span>
            </div>
            <div className="instruction">
              <img src={ellipse} alt="" />
              <span>COLOR AFTER 3 MINUTES</span>
            </div>
          </div>
          <div className="about-tea-main">
            <h1>About this tea</h1>
            <div className="tea-info-flex">
              <div className="info">
                <p className="bold-p">Flavor</p>
                <p>Spicy</p>
              </div>
              <div className="info">
                <p className="bold-p">QUALITIES</p>
                <p>Smoothing</p>
              </div>
              <div className="info">
                <p className="bold-p">CAFFEINE</p>
                <p>Medium</p>
              </div>
              <div className="info">
                <p className="bold-p">ALLERGENS</p>
                <p>Nuts-free</p>
              </div>
            </div>
            <div className="more-info-footer">
              <h1>Ingredient</h1>
              <p>
                Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
                Cinnamon sticks, Cardamom, Cinnamon pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
