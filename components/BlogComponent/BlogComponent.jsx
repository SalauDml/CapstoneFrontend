import React from "react";
import styles from "./blogcomponent.module.css";
import Image from "next/image";

function BlogComponent({ src, mini_description,time }) {
  return (
    <div className={styles.compCtn}>
      <div className={styles.imgCtn}>
        <Image src={src} fill="true" />
      </div>
      <h3>{time} min read</h3>
      <p>{mini_description}</p>
      <p>Read more</p>
    </div>
  );
}

export default BlogComponent;
