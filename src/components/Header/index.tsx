import React from "react";
import { CgMathEqual } from "react-icons/cg";
import { NavBar } from "../NavBar";

import styles from "./styles.module.scss";

export const Header: React.FC<{}> = () => {
  return (
    <div className={styles.containercontent}>
      <div className={styles.containersvg}>
        <CgMathEqual />
      </div>
      <NavBar />
    </div>
  );
};
