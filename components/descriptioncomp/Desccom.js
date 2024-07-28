import React from 'react'
import styles from './desccom.module.css'
import Image from "next/legacy/image"

function Desccom({src,htext,ptext}) {
  return (
    <>
    <div className={styles.compCtn}> 
        <div className={styles.imgCtn}>
            <Image
                src={src}
                fill= "true"
                objectFit='cover'
            />
        </div>
        <h2>{htext}</h2>
        <p>{ptext}</p>
    </div>
    </>
  )
}

export default Desccom