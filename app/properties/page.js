import React from "react";
import Listingcomp from "@/components/listingcomp/Listingcomp";
import listimg1 from "../../public/listingimg1.jpg";
import Footer from "@/components/Footer/Footer";
function page({params}) {
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
            <select defaultValue='Location'  name="Location" id="location">
              <option value="Lagos">Lagos</option>
              <option value="Lagos">Lagos</option>
              <option value="Lagos">Lagos</option>
            </select>
            <select defaultValue='Property Type' name="Property Type" id="ptype">        
              <option value="Bungalow">Bungalow</option>
              <option value="Bungalow">Story building</option>
              <option value="Bungalow">Apartment</option>
            </select>
            <select defaultValue='Pricing range' name="Pricing Range" id="prange">
              <option value="Bungalow">Bungalow</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Bungalow">Bungalow</option>
            </select>
            <select defaultValue='Property Size' name="Property Size" id="psize">
              
              <option value="Bungalow">Small</option>
              <option value="Bungalow">Medium</option>
              <option value="Bungalow">Large</option>
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
      </section>
      <Footer/>
    </>
  );
}

export default page;
