import "./UniversalBox.css";
import arrow from "../../../images/icons/expand.png";
interface universalBox {
  suggestedList?: string[];
  title: string;
  subtext: string;
  buttonText: string;
}
export default function UniversalBox({
  suggestedList,
  title,
  subtext,
  buttonText,
}: universalBox) {
  return (
    <div className="universal-box">
      <h1>{title}</h1>
      <p>{subtext}</p>
      <div className="suggest-list">
        {suggestedList?.map((e) => (
          <div className="suggested">
            <img src={arrow} alt="" />
            <p>{e}</p>
          </div>
        ))}
      </div>
      <button>{buttonText}</button>
    </div>
  );
}
