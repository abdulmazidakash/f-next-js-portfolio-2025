'use client'
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import project1 from '../../../../public/images/projects/crypto-screener-cover-image.jpg'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion'

const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github})=>{
	return (
		<article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
			{/* dark border box  */}
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
			{/* image box  */}
			<Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='-blank'>
				<FramerImage 	whileHover={{scale:1.05}}
			transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto' />
			</Link>
			{/* text box  */}
			<div className='w-1/2 flex flex-col items-start justify-between pl-6'>
				<span className='text-teal-700 font-medium text-xl'>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark text-justify'>{summary}</p>
				<div className='mt-2 flex items-center'>
					<Link href={github} target='_blank' ><FaGithub className='text-4xl'/></Link>
					<Link 
						href={link} 
						target='_blank'
						className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ml-4'
						>Visit Project <BsBoxArrowUpRight className='w-6 ml-1' /></Link>
				</div>
			</div>
		</article>
	)
}

const Project = ({title, type, img, link, github})=>{
	return (
		<article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
			{/* dark border box  */}
			<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
			{/* image box  */}
			<Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='-blank'>
				<FramerImage 	whileHover={{scale:1.05}}
			transition={{duration:0.2}} src={img} alt={title} className='w-full h-auto' />
			</Link>
			{/* text box  */}
			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-teal-700 font-medium text-xl'>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
				</Link>
				<div className='mt-2 flex items-center w-full justify-between'>
					<Link href={github} target='_blank' ><FaGithub className='text-4xl'/></Link>
					<Link 
						href={link} 
						target='_blank'
						className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
						>Visit<BsBoxArrowUpRight className='w-6 ml-1' /></Link>
				</div>
			</div>
		</article>
	)
}
export default function ProjectPage() {
  return (
	<div className='w-full mb-16 flex flex-col items-center justify-center p-32'>
		<div className=''>
			<AnimatedText text={'Imagination Trump Knowledge!'}/>
		</div>
		{/* project card grid container  */}
		<div className='grid grid-cols-12 gap-24 pt-16'>
			{/* card section 01  */}
			<div className='col-span-12'>
				{/* featured project card -1 */}
				<FeaturedProject
				title={'ScholarshipHub'}
				img={project1}
				summary={`ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships. It also facilitates the application process, allowing students to apply for scholarships directly through the platform. The system supports three types of users: default users, administrators, and moderators. Upon registration, a user is assigned the 'user' role by default. Administrators have the capability to change user roles as needed.`}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>
			</div>
			<div className='col-span-6'>
				{/* project 1 card  */}
				<Project
				title={'ScholarshipHub'}
				img={project1}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>
			</div>
			<div className='col-span-6'>
				{/* project 2 card  */}
				<Project
				title={'ScholarshipHub'}
				img={project1}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>

			</div>

			{/* card section 02  */}
			<div className='col-span-12'>
				{/* Featured Projects card 02 */}
				<FeaturedProject
				title={'ScholarshipHub'}
				img={project1}
				summary={`ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships. It also facilitates the application process, allowing students to apply for scholarships directly through the platform. The system supports three types of users: default users, administrators, and moderators. Upon registration, a user is assigned the 'user' role by default. Administrators have the capability to change user roles as needed.`}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>
			</div>
			<div className='col-span-6'>
				{/* project 3 card  */}
				<Project
				title={'ScholarshipHub'}
				img={project1}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>
			</div>
			<div className='col-span-6'>
				{/* project 4 card  */}
				<Project
				title={'ScholarshipHub'}
				img={project1}
				link={'https://scholarship-hub-akash.netlify.app/'}
				github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
				type={'Featured Project'}
				/>
			</div>


		</div>
	</div>
  )
}
