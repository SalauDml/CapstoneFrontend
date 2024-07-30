import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Buttons from "@/components/Buttons/Buttons";
import "./globals.css";
import buildingImg from "../public/building.png";
import Desccom from "@/components/descriptioncomp/Desccom";
import locationPng from "../public/location.png";
import amenitiesPng from "../public/amenities.png";
import propertyPng from "../public/propertytype.png";
import StepsComponent from "@/components/stepsComponent/StepsComponent";
import step1Png from "../public/step1.jpg";
import step2Jpg from "../public/step2.jpg";
import step3Jpg from "../public/step3.jpg";
import Listingcomp from "@/components/listingcomp/Listingcomp";
import listimg1 from "../public/listingimg1.jpg";
import Testimonials from "@/components/testimonials/Testimonials";
import profilepicture from "../public/profilepicture.jpg";
import Footer from "@/components/Footer/Footer";
import heroImg from "../public/building2.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="heroTextCtn">
          <h2>Disover Your Dream Property With Real Estate</h2>
          <p>
            Welcome to Real Estatoe, where your journey to finding the perfect
            home begins. Whether you're searching for a cozy apartment, a
            spacious family house, or an investment property, we have the
            expertise and resources to make your vision a reality.
          </p>
          <Buttons text="View Properties" type="hero" />
        </div>
        <div className="heroImgCtn">
          <Image src={heroImg} fill="true" />
        </div>

        {/* <div>
          {" "}
          <Buttons text="Browse Listing" type="nav" />{" "}
          <Buttons type="herotransparent" text="List your Place" />
        </div> */}
      </section>

      <section className="listing">
        <h2>Featured Properties</h2>
        <p>
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
        <div className="listingCtn">
          <Listingcomp
            src={listimg1}
            address="123 Elm Street, Seattle, WA 98101"
            heading="Cozy Cottage in Seattle City"
            text="This charming cottage features two bedrooms, a spacious living room and a beautifully landscaped backyard"
            price="$500,000"
            nroom="2 rooms"
            nbath="4 baths"
            sqft="2500 sqft"
          />
          <Listingcomp
            src={listimg1}
            address="123 Elm Street, Seattle, WA 98101"
            heading="Cozy Cottage in Seattle City"
            text="This charming cottage features two bedrooms, a spacious living room and a beautifully landscaped backyard"
            price="$500,000"
            nroom="2 rooms"
            nbath="4 baths"
            sqft="2500 sqft"
          />
          <Listingcomp
            src={listimg1}
            address="123 Elm Street, Seattle, WA 98101"
            heading="Cozy Cottage in Seattle City"
            text="This charming cottage features two bedrooms, a spacious living room and a beautifully landscaped backyard"
            price="$500,000"
            nroom="2 rooms"
            nbath="4 baths"
            sqft="2500 sqft"
          />
        </div>
        <a href="">
          <Buttons text="View all" type="listingbutton" />
        </a>
      </section>
      <section className="testimonials">
        <div className="testimonialsTextCtn">
          <h2 id="heading">Customer Testimonials</h2>
          <p>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>

        <div className="testimonialsCtn">
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="We couldnt have asked for a better experience with Real Estatoe Their expertise and dedication made our home-buying process smooth and stress-free. They found us our dream home and negotiated a great deal. Highly recommended!"
          />
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="I recently sold my property with Real Estatoe, and I was impressed by their professionalism and market knowledge. They went above and beyond to showcase my home and secure a quick sale at a great price. Thank you!"
          />
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="We couldnt have asked for a better experience with Real Estatoe Their expertise and dedication made our home-buying process smooth and stress-free. They found us our dream home and negotiated a great deal. Highly recommended!"
          />
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="I can't thank Real Estatoe enough for helping me find the perfect rental property. They listened to my preferences and found me a beautiful apartment within my budget. Their attention to detail and commitment to customer satisfaction truly stand out"
          />
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="Selling my property through Real Estatoe was a breeze. Their team's marketing strategies and negotiation skills were impressive. I was kept informed at every step, and my property sold quickly. I highly recommend their services"
          />
          <Testimonials
            pfp={profilepicture}
            address="New York"
            text="We couldnt have asked for a better experience with Real Estatoe Their expertise and dedication made our home-buying process smooth and stress-free. They found us our dream home and negotiated a great deal. Highly recommended!"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
