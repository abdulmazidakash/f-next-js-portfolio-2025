'use client'
import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({degree, department, companyLink, time, address, work}) =>{
	const ref = useRef(null);

	return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] sm:w-[100%] md:w-[60%] mx-auto flex flex-col items-center justify-between'>
		
		<LiIcon reference={ref} />
		<motion.div
		initial={{y:50}}
		whileInView={{y:0}}
		transition={{duration:0.5, type:'spring'}}
		>
			<h3 className='capitalize font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl mb-2 text-dark'>{degree}&nbsp;<a href={companyLink} target='_blank' className='text-teal-600 capitalize'>@{department}</a></h3>
			<span className='capitalize font-medium text-dark/75'>
				{time} | {address}
			</span>
			<p className='w-full text-justify mt-2 font-semibold text-dark'>
				{work}
			</p>
		</motion.div>
	</li>
}

export default function Experience() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
			target: ref,
			offset: ["start end", "center start"],
});


  return (
	<div className='my-32'>
		<h2 className='w-full font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 lg:mb-16 text-center text-dark'>Education</h2>

		<div ref={ref} className='w-10/12 mx-auto relative '>
			{/* sidebar div  */}
			<motion.div 
				style={{ scaleY: scrollYProgress }} 
				className="
					absolute -z-10 
					-left-4 sm:left-0 md:left-7 lg:left-7 
					top-0 
					w-[2px] sm:w-[3px] md:w-[3px] lg:w-[4px] 
					h-full
					text-dark text-dark 
					bg-dark 
					origin-top
				">
			</motion.div>


			<ul className='w-full flex flex-col items-start justify-between ml-4'>
				<Details 
				degree={'Bachelor Of Science In'} 
				department={'Textile Engineering'}
				companyLink={'www.google.com'} 
				time={'2021 - Present'} 
				address={'Narsingdi Textile Engineering College (NTEC)'} 
				work={`Major coursework includes Textile Fibers, Yarn Manufacturing, Fabric Structure & Design, Textile Testing and Quality Control, and Textile Production Management.`} 
				/>
				<Details 
				degree={'Diploma In'} 
				department={'Textile Engineering'}
				companyLink={'www.google.com'} 
				time={'2016 - 2020'} 
				address={'Chattogram Textile Institute (CTI)'} 
				work={`Key subjects covered Textile Raw Materials, Spinning Technology, Weaving Technology, Dyeing & Finishing, and Industrial Training in Textile Mills.`} 
				/>
			</ul>
		</div>
	</div>
  )
}
