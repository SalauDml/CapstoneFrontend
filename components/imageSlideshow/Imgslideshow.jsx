"use client";
import React from "react";
import styles from "./Imgslide.module.css";
import Image from "next/image";
import rand from "../../public/step1.jpg";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { useEffect } from "react";
import { useState } from "react";

function Imgslideshow({id}) {
  
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((previousIndex) => previousIndex + 1);
  };
  const handlePrev = () => {
    setCurrentIndex((previousIndex) => previousIndex - 1);
  };

  useEffect(() => {
    // if (!id)
    //     console.error("no id");
    //     return;
    async function fetchPropertiesImages() {
      try {
        const resimages = await fetch(
          `http://127.0.0.1:8000/properties/images/${id}`
        );
        if (!resimages.ok) throw new Error("Network Response not Ok");
        const imagedata = await resimages.json();

        const imageFields = [
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image1}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image2}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image3}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image4}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image5}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image6}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image7}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image8}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image9}`,
          `${process.env.NEXT_PUBLIC_IMG_URL + imagedata.image10}`,
        ];
        setImages(imageFields);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPropertiesImages();
  }),
    [];

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className={styles.compCtn}>
        <div className={styles.topImgCtn}>
          {images.map((image_url, index) => (
            <div key={index} className={styles.smallImgCtn}>
              <Image fill="true" src={image_url} alt="Picture of building" />
            </div>
          ))}
        </div>
        <div className={styles.bottomImgCtn}>
          <div className={styles.bigImgCtn}>
            <Image src={images[currentIndex]} fill="true" />
          </div>
          <div className={styles.bigImgCtn}>
            <Image src={images[currentIndex + 1]} fill="true" />
          </div>
        </div>
        <div className={styles.navIcons}>
          <HiArrowCircleLeft className={styles.leftIcon} onClick={handlePrev} aria-disabled={currentIndex == 0} />
          <HiArrowCircleRight
            className={styles.rightIcon}
            onClick={handleNext}
            aria-disabled = {currentIndex+1 ==images.length}
          />
        </div>
      </div>
    </>
  );
}

export default Imgslideshow;
