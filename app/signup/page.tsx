"use client"

import Link from 'next/link';
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible (!passwordVisible);
  };

  return (
    <section className="py-28">

    <div className='flex flex-col items-center ' >

<div className="text-center">
    <h1 className='md:text-[28px] text-[20px] font-bold'>Create an account</h1>
    <p className="mt-1 px-4 md:text-[16px] text-[13px]">
    Enter your information to create a new account
    </p>
</div>
  
<div className='py-16 px-6 my-10 md:w-1/3 bg-gray-100 rounded-md' >
    <form action="submit" className='flex flex-col' >
    
    <div className="mb-5">
        <div className='mb-1' >
            <label htmlFor="email">Full Name</label>
        </div>

        <div className=''>
        <input className='py-2 px-3 outline-none w-full  rounded-md bg-white' id="name" placeholder="Full name" type="name" required />
        </div>

    </div>

    <div className="mb-5">
        <div className='mb-1' >
            <label htmlFor="email">Email address</label>
        </div>

        <div className=''>
        <input className='py-2 px-3 outline-none w-full rounded-md bg-white' id="email" placeholder="name@example.com" type="email" required />
        </div>

    </div>

    <div className="mb-5">
        <div className='mb-1' >
            <label htmlFor="password">Password</label>
        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <div className='flex flex-row-reverse justify-between '>
         <input className='py-2 px-3 outline-none w-full active:bg-white  text-left rounded-md bg-white' id="password" placeholder="********" type={passwordVisible ? 'text' : 'password'} required pattern= ".{8}" title="Must contain at least 8 or more characters"/>
            <button className='absolute mr-4 mt-3' onClick={togglePasswordVisibility}>  
            {passwordVisible
            ?  <FaEye  />
            :  <FaEyeSlash />
            } 
            </button>
        </div>       
    </div>

        <button className='mt-4 w-full rounded-md font-semibold text-white py-2 bg-blue-400' type="submit">
        <Link href="/">Sign Up</Link>
        </button>

    </form>

</div>

    <div><p>Already have an account?<Link className="text-blue-400" href= "signin" >Signin</Link></p></div>

</div>


    </section>



                


    
  )
}
