import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import Button from "./components/Button/Button";
import "./App.scss";

const cardImgs = [
  { src: "/img/Bulbasaur.png" },
  { src: "/img/Charmander.png" },
  { src: "/img/Clefairy.png" },
  { src: "/img/Cubone.png" },
  { src: "/img/Diglett.png" },
  { src: "/img/Ditto.png" },
  { src: "/img/Eevee.png" },
  { src: "/img/Meowth.png" },
  { src: "/img/Pichu.png" },
  { src: "/img/Pikachu.png" },
  { src: "/img/Psyduck.png" },
  { src: "/img/Slowpoke.png" },
  { src: "/img/Snorlax.png" },
  { src: "/img/Squirtle.png" },
  { src: "/img/Totodile.png" },
  { src: "/img/Wobbuffet.png" },
];

const gameMode = {
  easy: { numCards: 12, gridColumns: 4 },
  medium: { numCards: 20, gridColumns: 5 },
  hard: { numCards: 28, gridColumns: 7 },
};

function App() {
  const [moves, setMoves] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const hasWon = cards.length ? cards.every((card) => card.matched) : false;

  const randomizeCards = () => {
    const numCards = gameMode[difficulty].numCards;
    const randomCards = [];
    const listIndex = [];

    while (randomCards.length < numCards) {
      const random = Math.floor(Math.random() * cardImgs.length);

      // If the img is already choosen, randomize another number
      if (listIndex.includes(random)) {
        continue;
      }

      listIndex.push(random);

      // Double push because we need a pair of the same card
      randomCards.push({
        id: Math.random(),
        matched: false,
        ...cardImgs[random],
      });

      randomCards.push({
        id: Math.random(),
        matched: false,
        ...cardImgs[random],
      });
    }

    randomCards.sort((a, b) => a.id - b.id);

    setCards(randomCards);
    setMoves(0);
  };

  const handleClick = (card) => {
    if (cardOne) {
      if (card.id !== cardOne.id) {
        setCardTwo(card);
      }
    } else {
      setCardOne(card);
    }
  };

  const resetTurn = () => {
    setCardOne(null);
    setCardTwo(null);
    setMoves((prev) => prev + 1);
    setDisabled(false);
  };

  const isFlipped = (card) => {
    return card.id === cardOne?.id || card.id === cardTwo?.id || card.matched;
  };

  const backToMainMenu = () => {
    setCards([]);
    setDifficulty("");
  };

  useEffect(() => {
    if (!difficulty) {
      return;
    }

    randomizeCards();
  }, [difficulty]);

  useEffect(() => {
    if (!cardOne || !cardTwo) {
      return;
    }

    setDisabled(true);

    if (cardOne.src === cardTwo.src) {
      setCards((prev) =>
        prev.map((card) => {
          if (card.id === cardOne.id || card.id === cardTwo.id) {
            return { ...card, matched: true };
          }

          return card;
        })
      );
      resetTurn();
    } else {
      setTimeout(resetTurn, 1000);
    }
  }, [cardOne, cardTwo]);

  return (
    <div className="App">
      <Header />
      <main>
        {!difficulty && <Menu onClick={setDifficulty} />}

        {difficulty && (
          <>
            <div className={`card-grid ${difficulty}`}>
              <div className="moves">Moves: {moves}</div>
              <Button onClick={backToMainMenu}>Back to Menu</Button>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  flipped={isFlipped(card)}
                  disabled={disabled}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
      {hasWon && (
        <Overlay newGame={randomizeCards} backToMainMenu={backToMainMenu} />
      )}
    </div>
  );
}

export default App;
