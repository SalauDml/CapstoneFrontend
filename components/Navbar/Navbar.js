import React from "react";
import Buttons from "../Buttons/Buttons";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <h2>Real Estateo</h2>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          {/* <li><Link href={``}>About</Link></li> */}
          <li><Link href={`/properties`}>Properties</Link></li>
          <li><Link href={`/blog`}>Blogs</Link></li>
          <li><Link href={`addlisting/`}>Add Listing</Link></li>
        </ul>
        <div className={styles.finalCtn}>
          <Link href={`cart/`}>          <FaShoppingCart className={styles.shoppingCart}/>
          </Link>
          <Link href={`/properties`}>          <Buttons type="nav" text="Browse Listing" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
