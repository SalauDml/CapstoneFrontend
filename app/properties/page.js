"use client";
import React, { useEffect } from "react";
import Listingcomp from "@/components/listingcomp/Listingcomp";
import listimg1 from "../../public/listingimg1.jpg";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import { useRef } from "react";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import Link from "next/link";
import Cookies from "js-cookie";
function page({ params }) {
  const initialrender = useRef(true);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [pricing, setPricing] = useState("");
  const [size, setSize] = useState("");
  const [propertyType, setPropertyType] = useState('');
  const [propertydata, setPropertydata] = useState([]);
  const [pagenumber, setPagenumber] = useState(0)
  const propertiesperpage = 3;


  


  const startIndex = propertiesperpage * pagenumber
  const endIndex = startIndex + propertiesperpage

  const currentProperties = propertydata.slice(startIndex,endIndex)

  function handleNext(){
    if (endIndex< propertydata.length) {
      setPagenumber(pagenumber + 1)
    }
  }

  function handlePrev() {
    if (pagenumber == 0){
      return
    }
    setPagenumber(pagenumber - 1)
  }

  function onChange(event, setState) {
    setState(event.target.value);
  }

  async function fetchData() {
    if (initialrender.current == true) {
      initialrender.current = false;
      const token = Cookies.get('authToken')
      console.log(token)
      let response = await fetch("http://127.0.0.1:8000/properties",{
        method:'GET',
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      const data = await response.json();
      // console.log(data);
      // console.log(propertydata)
      setPropertydata(data);
      return;
    }

    try {
      const response = await fetch(
         `http://127.0.0.1:8000/properties/?location=${location}&property_type=${propertyType}&pricing=${pricing}&size=${size}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
         const pd = await response.json();
         console.log(pd, "BEFORE")
        setPropertydata(pd);
        console.log(propertydata, "AFTER")
      } else {
        console.log("Network Error");
      }
    } catch {}
  }
  useEffect(() => {
    fetchData();
  }, [location, pricing, propertyType, size]);

 
  return (
    <>
      <section className="search">
        <div className="hero">
          <h2>Find Your Dream Property</h2>
          <p>
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </p>
        </div>
        <div className="queryCtn">
          <div className="searchCtn">
            <input
              type="search"
              name=""
              id="searchbar"
              placeholder="Search for a property"
            />
            <button type="search-button">Search</button>
          </div>
          <div className="filterCtn">
            <select
              onChange={(event) => onChange(event, setLocation)}
              defaultValue="Location"
              name="location"
              id="location"
            >
              <option value="Lagos">Lagos</option>
              <option value="United States">United States</option>
              <option value="Rwanda">Lagos</option>
            </select>
            <select
              onChange={(event) => {
                onChange(event, setPropertyType);
              }}
              defaultValue="Property Type"
              name="property_type"
              id="ptype"
            >
              <option value="Bungalow">Bungalow</option>
              <option value="Story building">Story building</option>
              <option value="Bungalow">Apartment</option>
            </select>
            <select
              onChange={(event) => {
                onChange(event, setPricing);
              }}
              defaultValue="Pricing range"
              name="Pricing Range"
              id="prange"
            >
              <option value="1000-5000">1000 - 5000</option>
              <option value="5000-10000">5000 - 10000</option>
              <option value="10000-15000">10000 - 150000</option>
            </select>
            <select
              onChange={(event) => {
                onChange(event, setSize);
              }}
              defaultValue="Property Size"
              name="Property Size"
              id="psize"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>
      </section>
      <section className="properties">
        <div className="propertiesTextCtn">
          <h2>Discover a World of Possibilities</h2>
          <p>
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home
          </p>
        </div>

        <div className="listingCtn">
          <div className="listingCompCtn">
            {
            currentProperties.map((property, index) => (
              <Link href={`/properties/${property.id}`} key={index}>
              <Listingcomp
                src={`${process.env.NEXT_PUBLIC_IMG_URL + property.image}`}
                address={property.address}
                heading={property.title}
                text={property.mini_description}
                price={`$${property.price}`}
                nroom="2 rooms"
                nbath="4 baths"
                sqft="2500 sqft"
              />
              </Link>
              
            ))}
          </div>

          <div className="listingCtnNavSect">
            <HiArrowCircleLeft className="leftIcon" aria-disabled ={pagenumber == 0} onClick={handlePrev}/>
            <HiArrowCircleRight className="rightIcon" onClick={handleNext} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
