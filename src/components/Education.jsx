'use client'
import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) =>{
	const ref = useRef(null);

	return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
		<LiIcon reference={ref} />
		<motion.div
		initial={{y:50}}
		whileInView={{y:0}}
		transition={{duration:0.5, type:'spring'}}
		>
			<h3 className='capitalize font-bold text-2xl'>{type}</h3>
			<span className='capitalize font-medium text-dark/75'>
				{time} | {place}
			</span>
			<p className='w-full text-justify'>
				{info}
			</p>
		</motion.div>
	</li>
}

export default function Education() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
			target: ref,
			offset: ["start end", "end start"],
});


  return (
	<div className='my-64'>
		<h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

		<div ref={ref} className='w-[75%] mx-auto relative'>
			{/* sidebar div  */}
			<motion.div style={{scaleY:scrollYProgress}} className='absolute -z-10 left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>

			<ul className='w-full flex flex-col items-start justify-between ml-4'>
				<Details 
				type={'Bachelor Of Science In Computer Science'} 
				time={'2016-2020'}
				place={'Massachusetts Institute Of Technology (MIT)'} 
				info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
				/>
				<Details 
				type={'Bachelor Of Science In Computer Science'} 
				time={'2016-2020'}
				place={'Massachusetts Institute Of Technology (MIT)'} 
				info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
				/>
				<Details 
				type={'Bachelor Of Science In Computer Science'} 
				time={'2016-2020'}
				place={'Massachusetts Institute Of Technology (MIT)'} 
				info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'}
				/>
				
 | 

			</ul>
		</div>
	</div>
  )
}
