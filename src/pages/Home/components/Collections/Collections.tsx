import { CollectionsAPI } from "../../../../API/CollectionsAPI";
import "./Collections.css";
export default function Collections() {
  return (
    <section className="collections">
      <h1>Our Collections</h1>
      <div className="collection-list container">
        {CollectionsAPI.map((e, i) => (
          <div className="collection" key={i}>
            <p>{e.title}</p>
            <img src={e.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
