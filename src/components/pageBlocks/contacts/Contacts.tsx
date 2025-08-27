import {
  GitHubIcon,
  LinkedinIcon,
  MailIcon,
  TelegramIcon,
} from "@assets/contacts";
import { ContactButton } from "./contactButton/ContactButton";
import styles from "./contacts.module.scss";

const contactsData = [
  {
    icon: <GitHubIcon />,
    link: "https://github.com/Fozlush",
  },
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/fozlush/",
  },
  {
    icon: <TelegramIcon />,
    link: "https://t.me/Fozlush",
  },
  {
    icon: <MailIcon />,
    link: "mailto:Fozlush@gmail.com",
  },
];

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.contactsTitle}>Контакты</h1>
      <div className={styles.buttonsBlock}>
        {contactsData.map(({ icon, link }) => {
          return <ContactButton key={link} icon={icon} link={link} />;
        })}
      </div>
    </div>
  );
};
