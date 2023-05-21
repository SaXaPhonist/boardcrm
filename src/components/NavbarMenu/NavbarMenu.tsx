import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./NavbarMenu.module.scss";
import HomeIcon from "assets/images/main.svg";
import AdressIcon from "assets/images/search.svg";
import TableIcon from "assets/images/vs_tables.svg";
import CalendarIcon from "assets/images/calendar.svg";
import MapIcon from "assets/images/map.svg";
import MediaIcon from "assets/images/media.svg";
import SettingIcon from "assets/images/settings.svg";
import ProfileIcon from "assets/images/personal-settings.svg";
import FinanceIcon from "assets/images/finance_calculator.svg";
import ExitIcon from "assets/images/exit.svg";
import { Link, matchPath, useLocation, useMatch } from "react-router-dom";

interface IMenuTabs {
  id: number;
  title: string;
  icon: string;
  link?: string;
}

const MENU_TABS: IMenuTabs[] = [
  { id: 1, title: "Главная", icon: HomeIcon, link: '/' },
  { id: 2, title: "Поиск адресов", icon: AdressIcon, link: '/address' },
  { id: 3, title: "Таблицы", icon: TableIcon },
  { id: 4, title: "Календарь", icon: CalendarIcon },
  { id: 5, title: "Карты", icon: MapIcon },
  { id: 6, title: "Виджеты", icon: MediaIcon },
  { id: 7, title: "Настройки", icon: SettingIcon },
  { id: 8, title: "Выход", icon: ExitIcon },
];

interface IProps {
  isMenuExpanded: boolean;
}

export const NavbarMenu = ({ isMenuExpanded}: IProps) => {
  const [isSubSettings, toggleSettings] = useState(false);
  const location = useLocation()

  const openSubSettings = () => {
    toggleSettings((prev) => !prev);
  };

  return (
    // <div className={styles['nav-container']}>
    <nav className={`${styles.navbar} ${isMenuExpanded && styles.expanded}`}>
      <ul>
        <li className={styles["title-menu"]}>
            <span className={styles["nav-text"]}>Меню</span>
        </li>
        {MENU_TABS.map(({ id, title, icon, link }) => {
          if (title === "Настройки") {
            return (
              <li key={id} className={styles["nav-tab"]}>
                <div onClick={openSubSettings}>
                  <div className={`${styles["tab-content"]} ${isSubSettings ? styles['arrow-up']:styles['arrow-down']}`}>
                    <img width={32} height={32} src={icon} />
                    <span className={styles["nav-text"]}>{title}</span>
                  </div>
                  <ul className={`${styles["sub-tabs"]} ${isSubSettings && styles['sub-open']}`}>
                    <li>
                      <a href="#" onClick={() => false} className={`${styles['tab-content']}`}>
                        <img src={ProfileIcon} alt={title} width={32} height={32} />
                        <span className={styles["nav-text"]}>Настройки профиля</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className={`${styles['tab-content']} sub`}>
                        <img src={FinanceIcon} alt={title}  width={32} height={32}/>
                        <span className={styles["nav-text"]}>Управление финансами</span>
                      </a>
                    </li>
                  </ul>
                </div>/
              </li>
            );
          }

          return (
            <li key={id} className={`${styles["nav-tab"]} ${location.pathname === link && styles['active-tab']}`}>
              <Link to={link ?? "#"} className={`${styles['tab-content']} ${styles.nonsub}`}>
                <img width={32} height={32} src={icon} alt={title} />
                <span className={styles["nav-text"]}>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    // </div>
  );
};
