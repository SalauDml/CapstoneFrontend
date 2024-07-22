import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Buttons from "@/components/Buttons/Buttons";
import "./globals.css";
import buildingImg from "../public/building.png";
import Desccom from "@/components/descriptioncomp/Desccom";
import locationPng from '../public/location.png'
import amenitiesPng from '../public/amenities.png'
import propertyPng from '../public/propertytype.png'

export default function Home() {
  return (
    <>
      <div>
        <div className="bgWrapper">
          <Navbar />
          <div className="heroCtn">
            <div className="hero">
              <div>Your Home Search, Simplified – Explore with Us!</div>
              <p>
                Welcome to Real Estatoe, where your journey to finding the
                perfect home begins. Whether you're searching for a cozy
                apartment, a spacious family house, or an investment property,
                we have the expertise and resources to make your vision a
                reality.
              </p>
              <div>
                {" "}
                <Buttons text="Browse Listing" bc="white" />{" "}
                <Buttons bc="transparent" text="List your Place" />
              </div>
            </div>
          </div>
          <div className="imgCtn">
            <Image src={buildingImg} fill={true} objectFit="contain" />
          </div>
        </div>
        <section className="description">
          <h2>Diverse Properties Infinite Possibilities</h2>
          <div className="descCtn">
            <Desccom
              src={locationPng}
              htext="Location"
              ptext="Our properties are strategically located in vibrant neighborhoods, ensuring easy access to local attractions, dining, and for a convenient and exciting lifestyle."
            />
            <Desccom
            src = {propertyPng}
            htext='Property Type'
            ptext='Discover our diverse range of properties, from modern urban apartments to cozy countryside cottages, each designed to cater to your unique preferences and needs.'
            />
            <Desccom
            src={amenitiesPng}
            htext='Amenities'
            ptext='Elevate your living experience with our top-notch amenities, including fitness centers, communal spaces,  designed to make your stay comfortable and enjoyable.'
            />
          </div>
        </section>
        <section className="stepsCtn">
          <div className="stepsCtnHeader">
            <h2>How it Works</h2>
            <p>Concise overview of the process involved in buying or selling a property</p>
          </div>

        </section>

      </div>
    </>
  );
}
