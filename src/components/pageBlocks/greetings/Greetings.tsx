import { ChevronIcon } from "@assets/index";
import styles from "./greetings.module.scss";

export const Greetings = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.greetings}>Привет и добро пожаловать</p>
      <p className={styles.name}>
        Я - <span className={styles.gradientText}>Ярослав Клещев</span>
      </p>
      <p className={styles.profession}>
        <span className={styles.gradientText}>Frontend разработчик</span>
      </p>
      <p className={styles.description}>
        Я занимаюсь frontend разработкой уже больше 3 лет (из них 21 месяц
        комерческой разработки). За это время успел пройти путь от интерна в{" "}
        <a
          href="https://www.amocrm.ru/"
          target="blank"
          className={styles.gradientText}
        >
          amoCRM
        </a>{" "}
        до тимлида в{" "}
        <a
          href="https://tvoe.live/"
          target="blank"
          className={styles.gradientText}
        >
          TVOЁ.live
        </a>
      </p>
      <button className={styles.button}>
        Подробнее <ChevronIcon />
      </button>
    </div>
  );
};
