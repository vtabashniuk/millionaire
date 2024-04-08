import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MobileContext } from "../Context";
import data from "../questions.json";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import PointMenu from "../components/PointMenu/PointMenu";

const Game = () => {
  const isMobile = useContext(MobileContext);
  const navigate = useNavigate();
  const [pointsMenu, setPointsMenu] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [points, setPoints] = useState(0);
  const { questions } = data;
  const { question, options, correct_answer, amount } = questions.find(
    (item) => questionId === item.id
  );

  const checkAnswer = (answer, amount) => {
    if (answer.toLowerCase() === correct_answer.toLowerCase()) {
      if (questionId < questions.length - 1) {
        setQuestionId((prevId) => (prevId += 1));
        setPoints(amount);
      } else setPoints(amount);
    } else navigate("/end", { state: { points } });
  };

  const toggleMobileMenu = () => {
    setPointsMenu((prevState) => !prevState);
  };

  return (
    <>
      <h1>Game</h1>
      {isMobile && (
        <BurgerMenu isOpen={pointsMenu} onClick={toggleMobileMenu} />
      )}
      <div>
        <p>{question}</p>
        <ol type="A">
          {options.map((item) => (
            <li
              key={item}
              onClick={() => {
                checkAnswer(item, amount);
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div id="side-bar">
        {((isMobile && pointsMenu) || !isMobile) && (
          <PointMenu questions={questions} points={points} id={questionId} />
        )}
      </div>
    </>
  );
};

export default Game;
