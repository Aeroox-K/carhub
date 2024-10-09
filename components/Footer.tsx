import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 " >
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
            
            <div className="flex flex-col items-start gap-6 cursor-pointer" >
                <Link href="./">
                <Image 
                src="/carhub.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
                />
                </Link>

                <p className="text-base text-gray-700" >
                    Carhub 2024 <br /> All rights reserved &copy;
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row md:justify-end md:gap-36 gap-16 flex-wrap md:mt-0 mt-5" >
            {footerLinks.map((link) => (

                <div key={link.title} className="flex flex-col min-w-[100px] md:mt-0 mt-6" >
                  <h3 className="font-bold" >
                  {link.title}
                  </h3> 

                  <ul className="" >
                      {link.links.map((item) => (
                        <Link
                           key={item.title}
                           href={item.url}
                           className="text-gray-500">
                          <li className="mt-2">
                            {item.title}
                          </li>
                        </Link>
                    ))}
                  </ul>
                </div>
            ))}
            </div>

                {/* <div className="footer__links" >
                  {footerLinks.map((link) => (

                    <div key={link.title} 
                    className="footer__link">
                      <h3 className="font-bold" >
                        {link.title}
                      </h3>

                      {link.links.map((item) => (
                      <Link 
                          key={item.title}
                          href={item.url}
                          className="text-gray-500"
                        >
                          {item.title}
                      </Link>                          
                        ))}
                      
                    </div>
                  ))}
                </div> */}

            </div>

                <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 md:flex-row flex-col  sm:px-10 md:px-24 px:2 py-10">
                  <p>@2024 Carhub. All Rights Reserved</p>

                  <div className="footer__copyrights-link" >
                    <Link href="/" 
                    className="text-gray-500" >
                      Privacy Policy
                    </Link>
                    <Link href="/" 
                    className="text-gray-500" >
                      Terms of Use
                    </Link>
                  </div>

                </div>
        
    </footer>
  )
}

export default Footer