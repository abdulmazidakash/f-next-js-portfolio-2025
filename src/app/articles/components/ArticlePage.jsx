'use client'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import article1 from '../../../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../../../public/images/articles/create loading screen in react js.jpg'
import {motion} from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedArticle = ({img, title, time, summary, link}) =>{
	return (
		<li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
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
			<h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
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
	</div>
  )
}
