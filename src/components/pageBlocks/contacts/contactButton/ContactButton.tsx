import type { ReactElement, SVGProps } from "react";
import styles from "./contactButton.module.scss";

interface IContactButton {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  link: string;
}

export const ContactButton = ({ icon, link }: IContactButton) => {
  return (
    <a href={link} target="blank" className={styles.wrapper}>
      <div className={styles.content}>{icon}</div>
    </a>
  );
};
