import { Header } from "components/Header/Header";
import { NavbarMenu } from "components/NavbarMenu/NavbarMenu";
import styles from "./layout.module.scss";
import { SearchSection } from "components/SearchSection/SearchSection";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [isMenuExpanded, setMenuExpanded] = useState(false);

  return (
    <>
      <Header
        isMenuExpanded={isMenuExpanded}
        setMenuExpanded={setMenuExpanded}
      />
      <main className={styles["main-section"]}>
        <NavbarMenu isMenuExpanded={isMenuExpanded}/>
        <section className={styles['right-main-section']}>
          <Outlet />
        </section>
      </main>
    </>
  );
};
