import React from 'react'
import HireMeImage from '../../public/images/profile/circular-hire-me.png'
import Image from 'next/image'
import Link from 'next/link'

export default function HireMe() {
  return (
    <div
      className="
        fixed 
        right-4 -top-2 
        md:right-4 md:-top-2 
        lg:right-24 lg:top-auto lg:bottom-4
        z-50
        flex items-center justify-center overflow-hidden
      "
    >
      <div className="w-24 md:w-24 lg:w-40 sm:24 h-auto flex items-center justify-center relative">
        <Image
          className="fill-dark animate-wiggle"
          src={HireMeImage}
          width={150}
          height={150}
          alt="hire-me"
        />
        <Link
          href="mailto:abcd@gmail.com"
          className="
            flex items-center justify-center 
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark text-light shadow-md border border-solid border-dark 
             rounded-full font-semibold 
            hover:bg-light hover:text-dark 
			lg:w-20 lg:h-20
			md:w-12 md:h-12 text-md md:text-[10px] sm:text-[10px]
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}
