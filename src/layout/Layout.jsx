import React from "react";
import styles from "./Layout.module.scss";
import { Nav } from "../components/Nav/Nav";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Nav />

      <main className={styles.layout_main}>
        <section className={styles.layout_main_section1}>section1</section>
        <section className={styles.layout_main_section2}>section2</section>
      </main>

      <footer></footer>
    </div>
  );
};
