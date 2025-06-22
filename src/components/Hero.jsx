import Image from 'next/image'
import React from 'react'
import profilePicture from '../../public/images/profile/abdul-mazid-akash-facebook-proflie-removebg-preview.png'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs";
import HireMe from './HireMe'
import { FaFileDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="py-16 bg-light  flex flex-col justify-center mt-4">
      
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
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-left lg:text-left">
          <AnimatedText 
            text="Shaping Dreams into Reality with Creative Code" 
            className="!text-3xl sm:!text-2xl md:!text-4xl lg:!text-5xl text-center lg:text-left"
          />
          <p className="my-4 font-medium text-base sm:text-lg md:text-xl lg:text-xl">
            Abdul Mazid Akash | Passionate MERN Stack Developer
          </p>

          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link 
              href="https://drive.google.com/file/d/1VUGjoZrcdWlxoiavj8zjraIQE8y_usT-/view?usp=sharing" 
              target="_blank"
              className="flex items-center bg-dark text-light p-3 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark transition-colors"
            >
              Resume <BsBoxArrowUpRight className="w-6 ml-2" />
            </Link>
            
            <Link 
              href="https://drive.google.com/file/d/1VUGjoZrcdWlxoiavj8zjraIQE8y_usT-/view?usp=sharing" 
              target="_blank"
              className="flex items-center bg-dark text-light p-3 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-dark transition-colors"
              download={true}
            >
              Download <FaFileDownload className="w-6 ml-2" />
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
