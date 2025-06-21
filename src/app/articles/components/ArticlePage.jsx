'use client'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import article1 from '../../../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../../../public/images/articles/create loading screen in react js.jpg'
import {motion, useMotionValue} from 'framer-motion'
import article3 from '../../../../public/images/articles/create modal component in react using react portals.png'
import article4 from '../../../../public/images/articles/smooth scrolling in reactjs.png'
import article5 from '../../../../public/images/articles/What is Redux with easy explanation.png'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link})=>{

	const x = useMotionValue(0)
	const y = useMotionValue(0);
	const imgRef = useRef(null);

	function handleMouse(event){
		// console.log(event.pageX);
		imgRef.current.style.display = 'inline-block';
		x.set(event.pageX);
		y.set(-10);
	}
	function handleMouseLeave(event){
		// console.log(event.pageX);
		imgRef.current.style.display = 'none';
		x.set(0);
		y.set(0);
	}
	return (
		<Link 
		href={link} 
		target='_blank'
		onMouseMove={handleMouse}
		onMouseLeave={handleMouseLeave}
		>
			<h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
			<FramerImage 
			style={{x:x, y:y}}
			initial={{opacity:0}}
			whileInView={{opacity:1, transition:{duration:0.2}}}
			ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg' />
		</Link>
	)
}

const Article = ({img, title, date, link})=>{
	return (
		<motion.li
		initial={{y:200}}
		whileInView={{y:0, transition:{duration: 0.5, ease:"easeInOut"}}}
		viewport={{once:true}}
		 className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
			<MovingImg title={title} img={img} link={link}/>
			<span className='text-teal-600 font-semibold pl-4'>{date}</span>
		</motion.li>
	)
}

const FeaturedArticle = ({img, title, time, summary, link}) =>{
	return (
		<li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative'>
			{/* dark border box  */}
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
			{/* image box  */}
			<Link
			href={link}
			target='_blank'
			className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
			> 
			<FramerImage
			whileHover={{scale:1.05}}
			transition={{duration:0.2}}
			src={img} alt={title} className='w-full h-auto'/>
			</Link>
			<Link
			href={link}
			target='_blank'
			> 
			<h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4'>{title}</h2>
			</Link>
			<p className='text-sm mb-2'>{summary}</p>
			<span className='text-teal-700 font-semibold'>{time}</span>
			
		</li>
	)
}

export default function ArticlesPage() {
  return (
	<div className='p-32 w-full flex flex-col items-center justify-center overflow-hidden'>
		<AnimatedText text={'Words can change the worlds'} className='mb-16'/>
		<ul className='grid grid-cols-2 gap-16'>
			{/* Featured Article 1 */}
			<FeaturedArticle 
			title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			summary={'Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'}
			time={'9 min read'}
			link={'/'} 
			img={article1}
			/>
			{/* Featured Article 2 */}
			<FeaturedArticle 
			title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			summary={'Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'}
			time={'9 min read'}
			link={'/'} 
			img={article2}
			/>
		</ul>
		<h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
		<ul className='w-full'>
			{/* 1st article  */}
			<Article
			 title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			 date={'June 22, 2025'}
			 link={'/'}
			 img={article3}
			/>
			{/* 2nd article  */}
			<Article
			 title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			 date={'June 22, 2025'}
			 link={'/'}
			 img={article3}
			/>
			{/* 3rd article  */}
			<Article
			 title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			 date={'June 22, 2025'}
			 link={'/'}
			 img={article3}
			/>
			{/* 4th article  */}
			<Article
			 title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			 date={'June 22, 2025'}
			 link={'/'}
			 img={article4}
			/>
			{/* 5th article  */}
			<Article
			 title={'Build A Custom Pagination Component In Reactjs From Scratch'}
			 date={'June 22, 2025'}
			 link={'/'}
			 img={article5}
			/>
		</ul>
	</div>
  )
}
