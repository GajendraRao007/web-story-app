import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavItemsOut = () => {
  return (
    <>
    <h1>Gajendra Rao Test Project XD</h1>
      <Link to="/?register=true">
        <button disabled className={styles.registerBtn}>Register</button>
      </Link>
      <Link to="/?signin=true">
        <button disabled className={styles.signinBtn}>Sign in</button>
      </Link>
    </>
  );
};

export default NavItemsOut;
