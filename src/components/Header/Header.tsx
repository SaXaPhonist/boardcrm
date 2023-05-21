import styles from "./Header.module.scss";
import LogoIcon from "assets/images/Logo.svg";
import AvatarDefault from "assets/images/person.svg";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setMenuExpanded: Dispatch<SetStateAction<boolean>>;
  isMenuExpanded: boolean;
}

export const Header = ({ isMenuExpanded: isOpen, setMenuExpanded }: IProps) => {
  const openMenu = () => {
    setMenuExpanded((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <section className={styles["logo-section"]}>
        <img
          className={styles.logo}
          width={48}
          height={48}
          src={LogoIcon}
          alt="Logo"
        />
        <div className={styles["hamburger-menu"]}>
          <button
            className={`${styles["menu-btn"]} ${
              isOpen ? styles["open-burger"] : ""
            }`}
            onClick={openMenu}
          >
            <span></span>
          </button>
        </div>
        <span>Wrench CRM</span>
      </section>
      <section className={styles["profile-section"]}>
        <img src={AvatarDefault} alt="Avatar" width={48} height={48} />
        <div className={styles.fullname}>
          <span>Name</span>
          <span>Surname</span>
        </div>
      </section>
    </header>
  );
};
