import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavItemsOut = () => {
  
  const handleClick = (e) => {
    e.preventDefault(); // Prevents the default behavior of the button
    alert("You can't access");
  };

  return (
    <>
      <h1>Gajendra Rao Test Project XD</h1>
      <Link to="/?register=true">
        <button className={styles.registerBtn} onClick={handleClick}>
          Register
        </button>
      </Link>
      <Link to="/?signin=true">
        <button className={styles.signinBtn} onClick={handleClick}>
          Sign in
        </button>
      </Link>
    </>
  );
};

export default NavItemsOut;
