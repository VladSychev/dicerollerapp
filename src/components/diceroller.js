import "./diceroller.css";
import { useState } from "react";

import DiceImage1 from "../images/dice1.png";
import DiceImage2 from "../images/dice2.png";
import DiceImage3 from "../images/dice3.png";
import DiceImage4 from "../images/dice4.png";
import DiceImage5 from "../images/dice5.png";
import DiceImage6 from "../images/dice6.png";

export default function Diceroller({ images }) {
  let diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,
  ];

  const [image, setNewImage] = useState(diceImages[0]);

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum]);
  };

  return (
    <div>
      <h1>Welcom to Dice Roller</h1>
      <div className="container">
        <img className="square" src={image}></img>
      </div>
      <button type="button" class="btn btn-outline-primary" onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
}
