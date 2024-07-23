import React from 'react'
import Image from 'next/image'
import styles from './listing.module.css'

function Listingcomp({src,address,heading,text,price,nroom,nbath,sqft}) {
  return (
    <div className={styles.compCtn}>
      <div className={styles.imgCtn}>
          <Image
                  src={src}
                  fill={true}
                  objectFit='cover'/>
          <div>Sale</div>
      </div>
      <p id={styles.address}>{address}</p>
      <p id={styles.name}>{heading}</p>
      <p id={styles.description}> {text}</p>
      <p id={styles.price}>{price}</p>
      <div className={styles.lineDivider}></div>
      <div className={styles.Bottom}>
      <p>{nroom}</p>
      <ul>
        <li>{nbath}</li>
        <li>{sqft}</li>
      </ul>
      </div>
      



        
    </div>

  )
}

export default Listingcomp