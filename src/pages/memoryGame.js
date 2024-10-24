import { useEffect } from "react";
import Card from "../components/card";
import "./game.css";
import { useState } from "react";

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [victory, setVictory] = useState(false);
  const [completedValues, setCompletedValues] = useState([]);
  const cardData = [
    { id: 1, value: "🐶" },
    { id: 2, value: "🐱" },
    { id: 3, value: "🐭" },
    { id: 4, value: "🐹" },
    { id: 5, value: "🐰" },
    { id: 6, value: "🦊" },
    { id: 7, value: "🐻" },
    { id: 8, value: "🐼" },
  ];
  useEffect(() => {
    if (cards.length == 2) {
      if (cards[0] === cards[1]) {
        setMatches(matches + 1);
        setCompletedValues([...completedValues, cards[0]]);
        setCards([]);
      } else {
        setTimeout(() => {
          setCards([cards[0]]);
        }, [100]);
      }
    }
  }, [cards]);

  useEffect(() => {
    if (matches == 8) {
      setVictory(true);
    }
  }, [matches]);

  const cardClick = (value) => {
    if (!completedValues.find((item) => item === value)) {
      setCards([...cards, value]);
    }
  };

  let shuffledData = [...cardData, ...cardData];
  const reset = () => {
    setMatches(0);
    setCards([]);
    setVictory(false);
    setCompletedValues([]);
  };
  return !victory ? (
    <div className="memorygame-root">
      <div>matches: {matches}</div>
      <div className="memorygame-displaycards">
        {shuffledData.map((cardItem, index) => {
          return (
            <div key={index}>
              <Card
                value={cardItem.value}
                cardClick={(value) => cardClick(value)}
                isFlipped={cards}
                checkSelected={completedValues}
                completedValues={completedValues}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      VICTORY!!!!!!!!!!!!!!---------------
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
};

export default MemoryGame;
