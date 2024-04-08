import { NavLink } from "react-router-dom";
import styles from "./StartGameButton.module.scss";

const StartGameButton = ({ title }) => {
  return (
    <NavLink to={"/game"} className={styles.button}>
      {title}
    </NavLink>
  );
};

export default StartGameButton;
