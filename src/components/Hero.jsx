import Image from 'next/image'
import React from 'react'
import profilePicture from '../../public/images/profile/abdul-mazid-akash-facebook-proflie-removebg-preview.png'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import { BsBoxArrowUpRight } from "react-icons/bs";
import HireMe from './HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Hero() {
  return (
	<div className='w-full h-full dark:bg-dark inline-block z-0 bg-light  p-32 pt-0'>
		
		<div className='flex items-center justify-between w-full'>
			{/* hero image box  */}
			<div className='w-1/2'>
				<Image 
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				priority 
				src={profilePicture} height={400} width={500} alt='abdul-mazid-akash' 
				className='object-cover h-[420px] bg-black/20 backdrop-blur-3xl rounded-lg overflow-hidden border-2 border-zinc-400 shadow-lg' />
			</div>
			{/* text box right side  */}
			<div className='w-1/2 flex flex-col self-center'>
			{/* animated component h1  */}
				<AnimatedText text={'Turning vision into Reality with code and design'} className='!text-6xl !text-left' />
				<p className='my-4 text-base font-semibold text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis blanditiis eligendi vitae. Reiciendis ducimus libero iusto saepe illo totam!</p>
			{/* button use  */}
			<div className='flex items-center self-start mt-2'>
				<Link 
				href={'/public/dummy.pdf'} 
				target='_blank'
				className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
				>Resume <BsBoxArrowUpRight className='w-6 ml-1' /></Link>
				<Link href={'mailto:abcd@gmail.com'} target='_blank' className='ml-4 font-semibold capitalize underline'>Contact</Link>
			{/* hire me component  */}
			</div>
				<HireMe/>
			</div>

			{/* lightBulb image  */}

			{/* <div className='absolute right-8 bottom-8 inline-block w-24'>
				<Image src={lightBulb} alt='bulb' className='w-full h-auto'/>
			</div> */}

		</div>
	</div>
  )
}
