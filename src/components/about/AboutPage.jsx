'use client'
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from '../../../public/images/profile/abdul-mazid-akash-profile.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';


const AnimateNumbers = ({value})=>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 5000});
    const isInView = useInView(ref, {once: true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue]);

    useEffect(()=>{
        springValue.on('change', (latest)=>{
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
        <AnimatedText text={'Crafting Creative Futures!'} 
        className="mb-16 !text-4xl sm:!text-5xl lg:!text-6xl xl:!text-8xl"
        />
        {/* --- CHANGE 1: Main Grid Container ---
          - Changed from 'grid-cols-8' to 'grid-cols-1 lg:grid-cols-8'.
          - This makes the layout a single column on mobile/tablet (default) and 8 columns on large screens.
        */}
        <div className='grid w-full grid-cols-1 lg:grid-cols-8 gap-16'>

        {/* --- CHANGE 2: Biography Box ---
          - Default state (mobile): Spans the full width ('col-span-1' in a 1-column grid).
          - Order: Set to 'order-2' on mobile and 'lg:order-1' on large screens.
          - Large screens: Spans 3 columns ('lg:col-span-3').
        */}
            <div className='col-span-1 lg:col-span-3 order-2 lg:order-1 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium text-justify text-dark'>This is Abdul Mazid Akash. I’m a student currently studying B.Sc. in Textile Engineering at Narsingdi Textile Engineering College. My hometown is Feni, but I’m now living in Narsingdi for my studies.</p>
                <p className='font-medium text-justify mt-4 text-dark'>I recently completed a web development course from Programming Hero. Right now, I’m building web applications using JavaScript, React.js, Node.js, and MongoDB. I enjoy creating websites that are both user-friendly and responsive.</p>
                <p className='font-medium text-justify mt-4 text-dark'>I’ve worked on several projects, including ScholarshipHub, a scholarship management system. One of my main team projects is TickTo, a bus ticket booking platform. In TickTo, I worked on real-time seat selection and secure payment features. This project helped me grow my frontend and backend skills and taught me how to work well in a team.</p>
            </div>

        {/* --- CHANGE 3: Image Box ---
          - Default state (mobile): Spans the full width ('col-span-1').
          - Order: Set to 'order-1' on mobile (to appear first) and 'lg:order-2' on large screens.
          - Large screens: Spans 3 columns ('lg:col-span-3').
        */}
            <div className="col-span-1 lg:col-span-3 order-1 lg:order-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 lg:p-8">
                {/* dark border box */}
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
                <Image 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                    src={profilePic} 
                    alt="about-pic" 
                    className="w-full h-auto rounded-2xl"
                />
            </div>

        {/* --- CHANGE 4: Statistics Container ---
          - Default state (mobile): Spans the full width ('col-span-1').
          - Order: 'order-3' on all screen sizes.
          - Flex Direction: 'flex-row' for mobile to place stats side-by-side, 'lg:flex-col' for large screens to stack them vertically.
          - Alignment: Items are centered on mobile and aligned to the end (right) on large screens.
          - Large screens: Spans 2 columns ('lg:col-span-2').
        */}
            <div className='col-span-1 lg:col-span-2 order-3 flex flex-row lg:flex-col items-center lg:items-end justify-between'>
                <div className='flex flex-col items-center lg:items-end justify-center'>
                    {/* Responsive Font Size */}
                    <span className='inline-block text-xl md:text-6xl lg:text-7xl font-bold text-dark'><AnimateNumbers value={'.'} />+</span>
                    <h1 className='text-base md:text-lg lg:text-xl font-semibold capitalize text-dark/75 text-center lg:text-right'>Satisfied clients</h1>
                </div>
                <div className='flex flex-col items-center lg:items-end justify-center'>
                     {/* Responsive Font Size */}
                    <span className='inline-block text-xl md:text-6xl lg:text-7xl font-bold text-dark'><AnimateNumbers value={3} />+</span>
                    <h1 className='text-base md:text-lg lg:text-xl font-semibold capitalize text-dark/75 text-center lg:text-right'>Project Completed</h1>
                </div>
                <div className='flex flex-col items-center lg:items-end justify-center'>
                     {/* Responsive Font Size */}
                    <span className='inline-block text-xl md:text-6xl lg:text-7xl font-bold text-dark'><AnimateNumbers value={1} />+</span>
                    <h1 className='text-base md:text-lg lg:text-xl font-semibold capitalize text-dark/75 text-center lg:text-right'>Years of experience</h1>
                </div>
            </div>
        </div>
    </div>
  )
}