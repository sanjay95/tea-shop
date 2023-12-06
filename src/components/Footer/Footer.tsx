import { FooterAPI } from "../../API/FooterAPI";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper container">
        {FooterAPI.map((e, i) => (
          <div className="footer-info" key={i}>
            <h1>{e.title}</h1>
            {e.anotherInfo.map((e, i) => (
              <p key={i}>{e}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
