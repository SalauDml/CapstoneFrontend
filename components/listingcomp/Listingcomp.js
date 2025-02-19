"use client";
import React from "react";
import Image from "next/legacy/image";
import styles from "./listing.module.css";

function Listingcomp({
  bruh,
  src,
  address,
  heading,
  text,
  price,
  nroom,
  nbath,
  sqft,
}) {
  return (
    <div className={styles.compCtn}>
      <div className={styles.imgCtn}>
        <Image className={styles.img} src={src} layout="fill" fill="true" objectFit="cover" />
        {/* <div>Sale</div> */}
      </div>
      <p id={styles.address}>{address}</p>
      <div className={styles.textCtn}>
        <p id={styles.name}>{heading}</p>
        <p id={styles.description}> {text}</p>
      </div>
      <div className={styles.buttonDiv}>
        <p id={styles.price}>{price}</p>
        <button>View Property Details</button>
      </div>
      
    </div>
  );
}

export default Listingcomp;
