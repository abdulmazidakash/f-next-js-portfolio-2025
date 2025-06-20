'use client'
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from '../../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';


const AnimateNumbers = ({value})=>{
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {duration: 3000});
	const isInView = useInView(ref, {once: true});

	useEffect(()=>{
		if(isInView){
			motionValue.set(value)
		}
	}, [isInView, value, motionValue]);

	useEffect(()=>{
		springValue.on('change', (latest)=>{
			// console.log(latest);
			if(ref.current && latest.toFixed(0) <= value){
				ref.current.textContent = latest.toFixed(0);
			}
		})
	},[springValue, value])

	return <span ref={ref}></span>
}

export default function AboutPage() {
  return (
	<div className=''>
		{/* reuseable component title  */}
		<AnimatedText text={'Passion Fuels Purpose!'} className='mb-16'/>
		{/* full about section container  */}
		<div className='grid w-full grid-cols-8 gap-16'>
		{/* text box  */}
			<div className='col-span-3 flex flex-col items-start justify-start'>
				<h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
				<p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat ullam quod odio quasi cumque fugit officiis commodi. Nostrum modi unde illum harum accusantium doloremque fugiat eos nemo maxime distinctio.</p>
				<p className='font-medium mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat ullam quod odio quasi cumque fugit officiis commodi. Nostrum modi unde illum harum accusantium doloremque fugiat eos nemo maxime distinctio.</p>
				<p className='font-medium mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat ullam quod odio quasi cumque fugit officiis commodi. Nostrum modi unde illum harum accusantium doloremque fugiat eos nemo maxime distinctio.</p>
			</div>
		{/* image box  */}
			<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
			<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>

			<Image 
				src={profilePic} 
				alt="about-pic" 
				className="w-full h-auto rounded-2xl"
			/>
			</div>
		{/* statics container  */}
			<div className='col-span-2 flex flex-col items-end justify-between'>
				<div className='flex flex-col items-end justify-center'>
					<span className='inline-block text-7xl font-bold'><AnimateNumbers value={50} />+</span>
					<h1 className='text-xl font-semibold capitalize text-dark/75'>Satisfied clients</h1>
				</div>
				<div className='flex flex-col items-end justify-center'>
					<span className='inline-block text-7xl font-bold'><AnimateNumbers value={40} />+</span>
					<h1 className='text-xl font-semibold capitalize text-dark/75'>Project Completed</h1>
				</div>
				<div className='flex flex-col items-end justify-center'>
					<span className='inline-block text-7xl font-bold'><AnimateNumbers value={2} />+</span>
					<h1 className='text-xl font-semibold capitalize text-dark/75'>Years of experience</h1>
				</div>
			</div>
		</div>
	</div>
  )
}
