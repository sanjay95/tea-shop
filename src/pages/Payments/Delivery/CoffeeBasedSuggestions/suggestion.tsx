import  { FC } from "react";
import "./suggestion.css";

interface suggestionProps {
  text: string;
  closePopup: () => void;
}

const Suggestion: FC<suggestionProps> = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1>{text}</h1>
      <button onClick={closePopup}>Close X</button>
     </div>
    </div>
  );
};

export default Suggestion;