import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import styles from "@/app/components/Nav.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Nav() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const uuid = uuidv4();

  const { data: session, status } = useSession();

  const handleLogout = () => {
    // Store the guest user data in local storage
    signOut();
    localStorage.setItem("guestUser", JSON.stringify({ id: uuid }));

    // Log the user out
    // ...
  };

  const handleLogin = () => {
    // Remove the guest user data from local storage
    localStorage.removeItem("guestUser");

    // Check if the item has been removed
    const guestUser = localStorage.getItem("guestUser");
    console.log(guestUser); // Output: null

    // Log the user in
    // ...
  };
  let left = (
    <div className="left">
      <Link href="/">
        <div className={styles.navItem} data-active={isActive("/")}>
          Home
        </div>
      </Link>

      <style jsx>{`
        div {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
        }

        .left div[data-active="true"] {
          color: aliceblue;
        }

        div + div {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div className="left">
        <Link href="/">
          <div className={styles.navItem} data-active={isActive("/")}>
            Home
          </div>
        </Link>
        <style jsx>{`
          div {
            color: var(--geist-foreground);
            display: inline-block;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
          }

          .left div[data-active="true"] {
            color: aliceblue;
          }
        `}</style>
      </div>
    );
    right = (
      <div className={styles.navItem} id="right">
        <p>Validating session ...</p>
        <style jsx>{`
          #right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <div
            className={styles.login}
            data-active={isActive("/signup")}
            onClick={() => handleLogin}
          >
            {" "}
            Log in
          </div>
        </Link>
        <style jsx>{`
          div {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
            padding-left: 1rem;
            padding-top: 1rem;
          }

          .right {
            float: right;
            margin-left: auto;
          }

          .right div {
            border: 1px solid var(--geist-foreground);
            padding: 1rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          <div className={styles.navItem} data-active={isActive("/")}>
            Home
          </div>
        </Link>
        {/* <Link href="/products">
          <div className={styles.navItem} data-active={isActive("/products")}>
            Products
          </div>
        </Link> */}
        {/* Admin link /admin needs to be made only accessible to admins */}
        <Link href="/admin">
          <div className={styles.navItem} data-active={isActive("/admin")}>
            Admin
          </div>
        </Link>

        <style jsx>{`
          div {
            color: var(--geist-foreground);
            display: inline-block;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
          }

          .left div[data-active="true"] {
            color: aliceblue;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p className={styles.navItem}>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/orderHistory">
          <div
            className={styles.navItem}
            data-active={isActive("/orderHistory")}
          >
            My Orders
          </div>
        </Link>
        <button className={styles.login} onClick={() => handleLogout()}>
          <div>Log out</div>
        </button>
        <style jsx>{`
          div {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
            padding-left: 1rem;
            padding-top: 1rem;
          }

          .right {
            float: right;
            margin-left: auto;
          }

          .right div {
            border: 1px solid var(--geist-foreground);
            padding: 1rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
            margin-right: auto;
          }
          .right div[data-active="true"] {
            color: aliceblue;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav className={styles.navBar}>
      {left}
      {right}
      {/* <style jsx>{`
        .navBar {
          background-color: white;
          padding: 1rem;
          font-size: 16px;
        }
      `}</style> */}
    </nav>
  );
}
