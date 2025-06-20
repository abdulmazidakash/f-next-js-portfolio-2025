'use client'
import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) =>{
	const ref = useRef(null);

	return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
		<LiIcon reference={ref} />
		<motion.div
		initial={{y:50}}
		whileInView={{y:0}}
		transition={{duration:0.5, type:'spring'}}
		>
			<h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-teal-600 capitalize'>@{company}</a></h3>
			<span className='capitalize font-medium text-dark/75'>
				{time} | {address}
			</span>
			<p className='font-medium w-full text-justify'>
				{work}
			</p>
		</motion.div>
	</li>
}

export default function Experience() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
			target: ref,
			offset: ["start end", "end start"],
});


  return (
	<div className='my-64'>
		<h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

		<div ref={ref} className='w-[75%] mx-auto relative'>
			{/* sidebar div  */}
			<motion.div style={{scaleY:scrollYProgress}} className='absolute -z-10 left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>

			<ul className='w-full flex flex-col items-start justify-between ml-4'>
				<Details 
				position={'Software Engineer'} 
				company={'Google'}
				companyLink={'www.google.com'} 
				time={'2022-Present'} 
				address={'Mountain View, CA'} 
				work={`Worked on a team responsible for developing new features for Google's 
						search engine, including improving the accuracy and relevance of search results and 
						developing new tools for data analysis and visualization.`} 
				/>
				<Details 
				position={'Software Engineer'} 
				company={'Google'}
				companyLink={'www.google.com'} 
				time={'2022-Present'} 
				address={'Mountain View, CA'} 
				work={`Worked on a team responsible for developing new features for Google's 
						search engine, including improving the accuracy and relevance of search results and 
						developing new tools for data analysis and visualization.`} 
				/>
				<Details 
				position={'Software Engineer'} 
				company={'Google'}
				companyLink={'www.google.com'} 
				time={'2022-Present'} 
				address={'Mountain View, CA'} 
				work={`Worked on a team responsible for developing new features for Google's 
						search engine, including improving the accuracy and relevance of search results and 
						developing new tools for data analysis and visualization.`} 
				/>
				<Details 
				position={'Software Engineer'} 
				company={'Google'}
				companyLink={'www.google.com'} 
				time={'2022-Present'} 
				address={'Mountain View, CA'} 
				work={`Worked on a team responsible for developing new features for Google's 
						search engine, including improving the accuracy and relevance of search results and 
						developing new tools for data analysis and visualization.`} 
				/>
			</ul>
		</div>
	</div>
  )
}
