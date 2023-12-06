import "./FirstSection.css";
import LandingImage from "../../../../images/Landing Main Image.webp";
import { Link } from "react-router-dom";
export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="container">
        <div className="fsec-flex">
          <img src={LandingImage} alt="TeaImage" />
          <div className="fsec-rightside">
            <h1>Every day is unique, just like our tea</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
              amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
              lacus nibh eros in.
            </p>
            <button>
              <Link to="/collections">BROWES TEAS</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
