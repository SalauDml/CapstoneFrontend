import React from 'react'
import Image from "next/legacy/image"
import styles from './stepsComponent.module.css'

function StepsComponent({no,heading,text,src}) {
  return (
    <>
    <div className={styles.Ctn}>
        <div className={styles.textCtn}>
            <div>{no}</div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
        
        <div className={styles.imgCtn}>
        <Image
            src={src}
            fill= "true"
            objectFit='cover'/> 
         </div>

    </div>    
    </>
    
  )
}

export default StepsComponent