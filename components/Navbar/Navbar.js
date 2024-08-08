import React from "react";
import Buttons from "../Buttons/Buttons";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <h2>Real Estateo</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Add Listing</li>
        </ul>
        <div>
          <FaShoppingCart/>
          <Buttons type="nav" text="Browse Listing" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
