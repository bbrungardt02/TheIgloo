import React from "react";
import styles from "@/app/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <footer className={styles.Footer}>
        <p>© 2023 The Igloo</p>
      </footer>
    </div>
  );
}
