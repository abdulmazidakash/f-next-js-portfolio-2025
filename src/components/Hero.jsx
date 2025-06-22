import Image from 'next/image'
import React from 'react'
import profilePicture from '../../public/images/profile/abdul-mazid-akash-facebook-proflie-removebg-preview.png'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs";
import HireMe from './HireMe'

export default function Hero() {
  return (
    <div className="py-20 bg-light  flex flex-col justify-center mt-4">
      
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        
        {/* hero image box */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            priority
            src={profilePicture}
            alt="abdul-mazid-akash"
            width={500}
            height={400}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover h-[420px] rounded-lg border-2 border-zinc-400 shadow-lg bg-black/20 backdrop-blur-3xl"
          />
        </div>

        {/* text box */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <AnimatedText 
            text="Turning vision into Reality with code and design" 
            className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl"
          />
          <p className="my-4 text-base font-medium max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis blanditiis eligendi vitae. Reiciendis ducimus libero iusto saepe illo totam!
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link 
              href="/public/dummy.pdf" 
              target="_blank"
              className="flex items-center bg-dark text-light p-3 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark transition-colors"
            >
              Resume <BsBoxArrowUpRight className="w-6 ml-2" />
            </Link>
            
            <Link 
              href="mailto:abcd@gmail.com" 
              target="_blank" 
              className="font-semibold capitalize underline"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 w-full flex justify-center lg:justify-start">
            <HireMe />
          </div>
        </div>

      </div>

    </div>
  )
}
