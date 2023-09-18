"use client";

import styles from "../../public/css/notFoundPage.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.numbers}>
          <span className={styles.number}>4</span>
          <span className={styles.number}>0</span>
          <span className={styles.number}>4</span>
        </div>
        <h1 className="mb-8 text-2xl">
          <span className="font-semibold">Ups!</span> Página não encontrada...
        </h1>
      </div>
    </>
  );
}
