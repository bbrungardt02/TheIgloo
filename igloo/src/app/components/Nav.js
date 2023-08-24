import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import styles from "@/app/components/Nav.module.css";

export default function Nav() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/">
        <div className={styles.navItem} id="bold" data-active={isActive("/")}>
          Home
        </div>
      </Link>
      <style jsx>{`
        #bold {
          font-weight: bold;
        }

        div {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
        }

        .left div[data-active="true"] {
          color: gray;
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
          <div className={styles.navItem} id="bold" data-active={isActive("/")}>
            Home
          </div>
        </Link>
        <style jsx>{`
          #bold {
            font-weight: bold;
          }

          div {
            color: var(--geist-foreground);
            display: inline-block;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
          }

          .left div[data-active="true"] {
            color: gray;
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
          <div className={styles.login} data-active={isActive("/signup")}>
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
          <div className={styles.navItem} id="bold" data-active={isActive("/")}>
            Home
          </div>
        </Link>
        <Link href="/products">
          <button>
            <div className={styles.navItem}>Products</div>
          </button>
        </Link>
        <style jsx>{`
          #bold {
            font-weight: bold;
          }

          div {
            color: var(--geist-foreground);
            display: inline-block;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
          }

          .left div[data-active="true"] {
            color: gray;
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
        <button className={styles.login} onClick={() => signOut()}>
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
        `}</style>
      </div>
    );
  }

  return (
    <nav className={styles.navBar}>
      {left}
      {right}
    </nav>
  );
}
