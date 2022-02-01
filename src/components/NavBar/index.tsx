import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export const NavBar: React.FC<{}> = () => {
  const router = useRouter();
  const uri = router.pathname;
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a className={uri === "/" ? styles.active : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={uri === "/about" ? styles.active : ""}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
