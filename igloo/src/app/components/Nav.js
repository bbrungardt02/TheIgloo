import Link from "next/link";
import React from "react";
import styles from "@/app/components/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <div className={styles.navItem}>Home</div>
      </Link>
      <Link href="/products">
        <div className={styles.navItem}>Products</div>
      </Link>
    </nav>
  );
}
