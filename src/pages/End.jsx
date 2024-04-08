import { useLocation } from "react-router-dom";
import StartGameButton from "../components/StartGameButton/StartGameButton";

const End = () => {
  const location = useLocation();
  
  return (
    <>
      <h1>Total score</h1>
      <p>{location.state.points} earned</p>
      <StartGameButton title={"Try again"} />
    </>
  );
};

export default End;
