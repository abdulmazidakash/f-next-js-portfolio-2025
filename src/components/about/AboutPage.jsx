'use client'
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from '../../../public/images/profile/abdul-mazid-akash-profile.jpg'
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
				<p className='font-medium text-justify'>This is Abdul Mazid Akash. I’m a student currently studying B.Sc. in Textile Engineering at Narsingdi Textile Engineering College. My hometown is Feni, but I’m now living in Narsingdi for my studies.</p>
				<p className='font-medium text-justify mt-4'>I recently completed a web development course from Programming Hero. Right now, I’m building web applications using JavaScript, React.js, Node.js, and MongoDB. I enjoy creating websites that are both user-friendly and responsive.</p>
				<p className='font-medium text-justify mt-4'>I’ve worked on several projects, including ScholarshipHub, a scholarship management system. One of my main team projects is TickTo, a bus ticket booking platform. In TickTo, I worked on real-time seat selection and secure payment features. This project helped me grow my frontend and backend skills and taught me how to work well in a team.</p>
			</div>
		{/* image box  */}
			<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
			{/* dark border box  */}
			<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>

			<Image 
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				priority 
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
