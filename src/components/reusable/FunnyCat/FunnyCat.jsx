import funnyCat from "../../../images/cute-cat.webp";
import styles from "./FunnyCat.module.scss";

const FunnyCat = () => {
  return (
    <div className={styles.catContainer}>
      <div className={styles.cat}>
        <img src={funnyCat} alt="Cat playing with a ball" />

        <div className={`${styles.left} ${styles.eye}`}>
          <div className={styles.eyeWatch}>
            <div className={styles.glare}></div>
          </div>
        </div>

        <div className={`${styles.right} ${styles.eye}`}>
          <div className={styles.eyeWatch}>
            <div className={styles.glare}></div>
          </div>
        </div>
      </div>

      <div className={styles.ballContainer}>
        <div className={styles.ballShadow}>
          <div className={styles.ball}></div>
        </div>
      </div>
    </div>
  );
};

export default FunnyCat;
