import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Buttons from "@/components/Buttons/Buttons";
import "./globals.css";
import buildingImg from '../public/building.png'

export default function Home() {
  return (
    <>
    <div className="bgWrapper">
        <Navbar/>
      <div className="heroCtn">
        <div className="hero">
          <div>Your Home Search, Simplified – Explore with Us!</div>
          <p>
            Welcome to Real Estatoe, where your journey to finding the perfect
            home begins. Whether you're searching for a cozy apartment, a
            spacious family house, or an investment property, we have the
            expertise and resources to make your vision a reality.
          </p>
          <div> <Buttons text='Browse Listing' bc='white'/> <Buttons bc='transparent' text='List your Place'/></div>
        </div>
      </div>
      <div className="imgCtn">

          <Image
          src={buildingImg}
          fill={true}
          objectFit="cover"/>
          </div>
    </div>
    </>
  );
}
