import React from 'react'
import HireMeImage from '../../public/images/profile/circular-hire-me.png'
import Image from 'next/image'
import Link from 'next/link'

export default function HireMe() {
  return (
	<div className='fixed right-24 bottom-4 flex items-center justify-center overflow-hidden'>
		<div className='w-48 h-auto flex items-center justify-center relative'>
			<Image className='fill-dark animate-wiggle' src={HireMeImage}  width={150} height={150} alt='hire-me'/>
			<Link href={'mailto:abcd@gmail.com'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>Hire Me</Link>
		</div>
	</div>
  )
}
