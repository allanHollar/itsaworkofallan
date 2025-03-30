import styles from "./Coffee.module.scss"; // make sure it's .scss, not .sass

const CoffeeCup = () => {
  return (
    <div className={`mt-24 ${styles.cup}`} id="coffee">
      <div className={styles.coffee}></div>
    </div>
  );
};

export default CoffeeCup;
