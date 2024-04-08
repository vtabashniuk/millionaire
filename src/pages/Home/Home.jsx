import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage";
import StartGameButton from "../../components/StartGameButton/StartGameButton";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ResponsiveImage />
          <h1 className={styles.title}>
            Who wants to be
            <br />a millionaire
          </h1>
          <StartGameButton title={"Start"} />
        </div>
      </div>
    </>
  );
};

export default Home;
