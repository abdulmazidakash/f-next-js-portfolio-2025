'use client'
import React from 'react'
import {motion, useScroll} from 'framer-motion'

export default function LiIcon({reference}) {
	const {scrollYProgress} = useScroll({
			target: reference,
			offset: ["center end", "center center"],
		})
return (
<div>
	<figure className='absolute text-dark  -left-13 sm:left-10 md:left-0 lg:left-0 stroke-dark'>
			<svg 
			className='
			-rotate-90
		
			md:w-[60px] md:h-[60px] 
			sm:w-[40px] sm:h-[40px]
			'  width={'75'} height={'75'} viewBox='0 0 100 100'>
	<circle cx={'75'} cy={'50'} r={'20'} className='stroke-teal-700 stroke-1 fill-none' />
	<motion.circle
	        cx={'75'} cy={'50'} r={'20'} className='stroke-[5px] fill-light'
				 style={{
					pathLength : scrollYProgress
				}}
				 />
	<circle cx={'75'} cy={'50'} r={'10'} className='animate-pulse stroke-1 fill-teal-700'/>
			</svg>
	</figure>
</div>
  )
}
