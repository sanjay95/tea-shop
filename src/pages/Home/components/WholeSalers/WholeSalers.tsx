import "./WholeSalers.css";
import landingImage from "../../../../images/Landing Main Image 2.webp";
export default function WholeSalers() {
  return (
    <section className="whole-salers">
      <div className="container whole-salers-flex">
        <div className="whole-salers-leftside">
          <h1>FOR WHOLESALERS</h1>
          <p>
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.
          </p>
          <button>get A free consultation</button>
        </div>
        <div className="whole-salers-rightside">
          <img src={landingImage} alt="" />
        </div>
      </div>
    </section>
  );
}
