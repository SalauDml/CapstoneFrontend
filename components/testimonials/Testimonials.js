import React from 'react'
import Image from "next/legacy/image"
import styles from './testimonial.module.css'


function Testimonials({text,pfp,address}) {
  return (
    <div className={styles.compCtn}>
        <div className={styles.textCtn}>
        <p>"{text}."</p>
        </div>
        <div className={styles.authorCtn}> 
            <div className={styles.imgCtn}>
                <Image
                src={pfp}
                fill="true"/>
            </div>
            <div className={styles.authorTextCtn}>
                <div >John</div>
                <div>Lives in {address}</div>
            </div>
            

        </div>
        

    </div>
  )
}

export default Testimonials