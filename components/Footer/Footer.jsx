import React from "react";
import styles from "./footer.module.css";
import Buttons from "../Buttons/Buttons";
import Image from "next/legacy/image";
import logo from "../../public/logo.jpeg";

function Footer() {
  return (
    <>
      <section className={styles.Footer}>
        <div className={styles.UpperCtn}>
          <div className={styles.textCtn}>
            <h2>Start Your Real Estate Journey Today</h2>
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div>
            <Buttons type="footer" text="Explore Properties" />
          </div>
        </div>
        <div className={styles.LowerCtn}>
          <div className={styles.iconCtn}>
            <div className={styles.logo}>
              <Image src={logo} fill="true" objectFit="contain" />
            </div>

            <h2>Real Estate</h2>
            <input
              type="email"
              name="email"
              id={styles.email}
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.PagesCtn}>
            <h2>Pages</h2>
            <ul>
              <li>Home</li>
              <li>List your place</li>
              <li>About</li>
              <li>Properties</li>
            </ul>
          </div>

          <div className={styles.AdminCtn}>
            <h2>Admin</h2>
            <ul>
              <li>Add Property | Delete Property</li>
              <li>Add Blogs | Delete Blogs</li>
            </ul>
          </div>
          <div className={styles.SocialCtn}>
            <a href="" className="fa fa-instagram"></a>
            <a href="" className="fa fa-twitter"></a>
            <a href="" className="fa fa-linkedin"></a>
            <a href="" className="fa fa-youtube"></a>
            <a href="" className="fa fa-snapchat"></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
