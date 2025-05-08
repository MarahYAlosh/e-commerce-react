import React from "react";
import styles from "./errorPageHandler.module.css";
import { Link } from "react-router-dom";
export const ErrorPageHandler = () => {
  return (
    <div>
      <h1>404 Error Page</h1>
      <section className={styles.errorContainer}>
        <span className={styles.four}>
          <span className={styles.screenReaderText}>4</span>
        </span>
        <span className={styles.zero}>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span className={styles.four}>
          <span className={styles.screenReaderText}>4</span>
        </span>
      </section>
      <div className={styles.linkContainer}>
        <Link className={styles.moreLink} aria-current="page" to="/">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};
