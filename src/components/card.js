import { useState } from "react";
import "./card.css";
const Card = ({ value, isFlipped, cardClick }) => {
  const [valueSign, showValueSign] = useState(false);
  const sentClick = (value) => {
    showValueSign(true);
    cardClick(value);
    if (isFlipped.length > 0 && !isFlipped.find((item) => item === value)) {
      setTimeout(() => {
        showValueSign(false);
      }, [500]);
    }
  };
  return (
    <div onClick={() => sentClick(value)} className="card-root">
      {valueSign ? value : ""}
    </div>
  );
};

export default Card;
