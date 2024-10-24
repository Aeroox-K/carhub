import { CustomButton } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (


<section className="py-28 sm:py-16 md:py-20">
    
        <div className="container mx-2 md:mx-12 xl:mx-12 p-4 max-sm:w-full md:w-3/4 lg:w-5/6">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold">About CarHub</h1>
          <p className="text-xl sm:text-lg md:text-xl mt-4">
            Welcome to CarHub, your premier car rental company. We're dedicated to providing you with a seamless and enjoyable car rental experience.
          </p>

          <div className="flex flex-wrap justify-start mt-12">
            
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
               <Image src="/mission.jpg" alt="mission" width={350} height={300} />
            <h2 className="text-2xl sm:text-xl md:text-2xl font-bold mt-4">Our Mission</h2>
              <p className="text-lg sm:text-base md:text-lg">
                Our mission is to provide our customers with the best car rental experience possible. We strive to offer a wide range of vehicles, competitive pricing, and exceptional customer service.
              </p>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <Image src="/fleet.jpg" alt="Fleet" width={350} height={300} />
            <h2 className="text-2xl sm:text-xl md:text-2xl font-bold mt-4">Our Fleet</h2>
              <p className="text-lg sm:text-base md:text-lg">
                Our fleet consists of a wide range of vehicles, from economy cars to luxury SUVs. We ensure that all of our vehicles are well-maintained and clean, so you can enjoy a safe and comfortable ride.
              </p>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
               <Image src="/team.jpg" alt="CarHub Team" width={350} height={300} />
            <h2 className="text-2xl sm:text-xl md:text-2xl font-bold mt-4">Our Team</h2>
              <p className="text-lg sm:text-base md:text-lg">
                Our team is dedicated to providing you with exceptional customer service. We're always available to answer your questions and help you with any issues you may have.
              </p>
            </div>
          </div>

          <div className="text-center ml-4 mt-12">
          <Link href="/contact">
            <CustomButton 
              title = "Get in Touch"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              /> 
          </Link>
          </div>

        </div>
      </section>




    //   <div className="container mx-2 md:mx-12 xl:mx-12 p-4">

    //       <h1 className="text-4xl font-extrabold">About CarHub</h1>
    //       <p className="text-xl mt-4">
    //         Welcome to CarHub, your premier car rental company. We're dedicated to providing you with a seamless and enjoyable car rental experience.
    //       </p>

    //       <div className="flex flex-wrap justify-start mt-12 ">
    //         <div className="w-full md:w-1/2 xl:w-1/3 py-3">
    //         <Image src="/mission.jpg" alt="mission" width={350} height={300} />
    //         <h2 className="text-2xl font-bold mt-4">Our Mission</h2>
    //           <p className="text-lg w-[350px]">
    //             Our mission is to provide our customers with the best car rental experience possible. We strive to offer a wide range of vehicles, competitive pricing, and exceptional customer service.
    //           </p>
    //         </div>

    //         <div className="w-full md:w-1/2 xl:w-1/3 py-3">
    //         <Image src="/fleet.jpg" alt="Fleet" width={350} height={300} />
    //         <h2 className="text-2xl font-bold mt-4">Our Fleet</h2>
    //           <p className="text-lg w-[350px]">
    //             Our fleet consists of a wide range of vehicles, from economy cars to luxury SUVs. We ensure that all of our vehicles are well-maintained and clean, so you can enjoy a safe and comfortable ride.
    //           </p>
    //         </div>

    //         <div className="w-full md:w-1/2 xl:w-1/3 py-3">
    //         <Image src="/team.jpg" alt="CarHub Team" width={350} height={300} />
    //         <h2 className="text-2xl font-bold mt-4">Our Team</h2>
    //           <p className="text-lg w-[350px]">
    //             Our team is dedicated to providing you with exceptional customer service. We're always available to answer your questions and help you with any issues you may have.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="text-center mt-12"> 
    //         <Link href="/contact">
    //         <CustomButton 
    //         title = "Get in Touch"
    //         containerStyles="bg-primary-blue text-white rounded-full mt-10"
    //         /> 
    //         </Link>
    //       </div>
    //     </div>

      )
}
