"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";


const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div id="hero" className="hero">
        <div className="flex-1 pt-36 padding-x" >
            <h1 className="hero__title" >
              Find, book or rent a car — quickly and easily
            </h1>

            <p className="hero__subtitle">
              streamline your car rental experience with our effortless booking process
            </p>

            <p className="font-semibold text-[20px] mt-4 text-red-500 ">&#40;Car Rent Feature Coming Soon&#41;</p>

    
            <div>

            </div>
            <Link href= {"#discover"} > 

            <CustomButton 
            title = "Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />  
            </Link>
        </div>

        <div className="hero__image-container" >
            <div className="hero__image" >
                <Image 
                src="/hero.png"
                alt="hero"
                fill className="object-contain"
                />
            </div>
                <div className="hero__image-overlay"/>
            
        </div>
    </div>
  )
}

export default Hero;