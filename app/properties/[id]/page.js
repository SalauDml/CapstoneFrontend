"use client";
import React from "react";
import "./propertylisting.css";
import Imgslideshow from "@/components/imageSlideshow/Imgslideshow";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function Page({params}) {
  const id = params.id
  const initial = useRef(true)
  const [property,setProperty] = useState(null)
  async function fetchData() {
    const response =  await fetch(`http://127.0.0.1:8000/properties/${id}`)
    const data = await response.json();
    setProperty(data)
    console.log(data.title)
  }
  if (initial.current == true){
    fetchData()
    initial.current = false
  }



  return (
    <>
      <div className="bgWrapper">
        <section className="images">
          <div className="imageTextCtn">
            <div className="nameCtn">
              <h1>Seaside Serenity Villa</h1>
              <h3>789 Skyline Avenue, Chicago, IL 60601</h3>
            </div>

            <div className="priceCtn">
              <h4>Price</h4>
              <h3>$700,000</h3>
            </div>
          </div>
          <Imgslideshow id={id}  />

          <div className="lowerCtn">
            <div className="description">
              <h2>Description</h2>
              <p>
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
              <div className="lineDivider"></div>
              <div className="descriptionLowerCtn">
                <div className="iconCtn">
                  <div className="iconCtnUpperCtn">
                    <IoBed className="icon" /> <h3>Bedrooms</h3>
                  </div>
                  <p>5</p>
                </div>
                <div className="iconCtn">
                  <div className="iconCtnUpperCtn">
                    <FaBath className="icon" /> <h3>Bathrooms</h3>
                  </div>
                  <p>4</p>
                </div>
                <div className="iconCtn">
                  <div className="iconCtnUpperCtn">
                    <FaVectorSquare className="icon" /> <h3>Sqft</h3>
                  </div>
                  <p>7</p>
                </div>
              </div>
            </div>
            <div className="keyFeatures">
              <h2>Key Features and Amenities</h2>
              <p>Expansive oceanfront terrace for outdoor entertaining</p>
              <p>Gourmet kitchen with top-of-the-line appliances</p>
              <p>Private beach access for morning strolls and sunset views</p>
              <p>
                Master suite with a spa-inspired bathroom and ocean-facing
                balcony
              </p>
              <p>Private garage and ample storage space</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Page;


