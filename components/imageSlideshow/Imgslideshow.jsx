import React from "react";
import styles from "./Imgslide.module.css";
import Image from "next/image";
import rand from "../../public/step1.jpg";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
function Imgslideshow() {
//     const router = useRouter
//     const {id} = router.query
//     const[loading,setLoading]= useState(true)

//     useEffect (()=>{
//         const fetchProperties = async () => {
//             try {
//                 const res = await fetch(`http://127.0.0.1:8000/properties/${id}/`)
//                 if (!res.ok) throw new Error('Network Response not Ok')
//                 data = res.json
//             }
//             catch(error){
//                 console.error("Error Fetching data",error);
//             }
//             finally{
//                 setLoading(false);

//             }
//         }

//     }
// ),[id]



  return (
    <>
      <div className={styles.compCtn}>
        <div className={styles.topImgCtn}>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
          <div className={styles.smallImgCtn}>
            <Image fill="true" src={rand} />
          </div>
        </div>
        <div className={styles.bottomImgCtn}>
          <div className={styles.bigImgCtn}>
            <Image src={rand} fill="true" />
          </div>
          <div className={styles.bigImgCtn}>
            <Image src={rand} fill="true" />
          </div>
        </div>
        <div className={styles.navIcons}>
          <HiArrowCircleLeft className={styles.leftIcon}/>
          <HiArrowCircleRight className={styles.rightIcon}/>
        </div>
      </div>
    </>
  );
}

export default Imgslideshow;
