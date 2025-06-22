'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../Logo'
import { usePathname, useRouter } from 'next/navigation'
import { FaInstagram, FaGithub, FaLinkedin, FaMoon, FaSun, FaXTwitter, FaFacebook } from "react-icons/fa6";
import {motion} from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) =>{
	const pathName = usePathname();
	console.log('pathname here--->', pathName);
	
	return (
			<Link href={href} className={`${className}  font-semibold relative group`}>
				{title}
				<span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0' }`}
				>&nbsp;
				</span>
			</Link>
	)
	
}
const CustomMobileLink = ({href, title, className="", toggle}) =>{
	const pathName = usePathname();
	const router = useRouter();
	// console.log('pathname here--->', pathName);
	const handleClick = ()=>{
		toggle();
		router.push(href)
	}
	
	return (
			<button href={href} className={`${className} text-light my-2 font-semibold relative group`} onClick={handleClick}>
				{title}
				<span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0' }`}
				>&nbsp;
				</span>
			</button>
	)
	
}
export default function Navbar() {

	const [mode, setMode] = useThemeSwitcher(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = ()=>{
		setIsOpen(!isOpen);
	}
  return (
	<div className='w-10/12 mx-auto py-8 font-medium flex items-center justify-between relative'>

		{/* hamburger menu  */}
		<button className='flex-col justify-center items-center lg:hidden flex' onClick={handleClick}>
			<span className={`transition-all duration-300 ease-out bg-dark block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
			<span className={`transition-all duration-300 ease-out bg-dark block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
			<span className={`transition-all duration-300 ease-out bg-dark block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
		</button>
		{/*--------- desktop menu--------  */}
		<div className='w-full  justify-between  items-center lg:flex hidden'>
			{/* left side page routing link  */}
		<nav>
			<CustomLink href={'/'} title={"Home"} className='mr-4'/>
			<CustomLink href={'/about'} title={"About"} className='mx-4'/>
			<CustomLink href={'/projects'} title={"Projects"} className='mx-4'/>
			<CustomLink href={'/articles'} title={"Articles"} className='ml-4'/>
		</nav> 
		
		{/* right side social icon link  */}
		<nav className='flex items-center justify-center flex-wrap'>
			<motion.a href={'https://www.linkedin.com/in/abdulmazidakash/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaLinkedin /></motion.a>
			<motion.a href={'https://github.com/abdulmazidakash'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'> <FaGithub /></motion.a>
			<motion.a href={'https://x.com/abdulmazidakash'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaXTwitter /></motion.a>
			<motion.a href={'https://www.facebook.com/akashabdulmazid/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaFacebook /></motion.a>
			<motion.a href={'https://www.instagram.com/abdulmazidakash/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl'><FaInstagram /></motion.a>
			<button
			className='ml-3 flex items-center justify-center rounded-full p-1'
			onClick={()=> setMode(mode === 'light' ? 'dark' : 'light')}
			>
				{
					mode === 'dark' ?
					<FaSun className='fill-dark text-3xl' /> : <FaMoon className='fill-dark text-3xl' />
				}
			</button>
		</nav>
		</div>

		{
		isOpen?

		<motion.div 
		initial={{scale:0, opacity:0, x:"0%", y:"8%"}}
		animate={{scale:1, opacity:1}}

		className='min-w-[70vw] flex flex-col  justify-between  items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-28'>
		{/* left side page routing link  */}
		<nav className='flex items-center flex-col justify-center'>
			<CustomMobileLink href={'/'} title={"Home"} className='' toggle={handleClick}/>
			<CustomMobileLink href={'/about'} title={"About"} className='' toggle={handleClick}/>
			<CustomMobileLink href={'/projects'} title={"Projects"} className='' toggle={handleClick}/>
			<CustomMobileLink href={'/articles'} title={"Articles"} className='' toggle={handleClick}/>
		</nav> 
		
		{/* right side social icon link  */}
		<nav className='flex items-center justify-center flex-wrap mt-2'>
			<motion.a href={'https://www.linkedin.com/in/abdulmazidakash/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3 sm:mx-1'><FaLinkedin className='text-light' /></motion.a>
			<motion.a href={'https://github.com/abdulmazidakash'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3 sm:mx-1'> <FaGithub className='text-light' /></motion.a>
			<motion.a href={'https://x.com/abdulmazidakash'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3 sm:mx-1'><FaXTwitter className='text-light' /></motion.a>
			<motion.a href={'https://www.facebook.com/akashabdulmazid/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3 sm:mx-1'><FaFacebook className='text-light' /></motion.a>
			<motion.a href={'https://www.instagram.com/abdulmazidakash/'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3 sm:mx-1'><FaInstagram className='text-light' /></motion.a>
			<button
			className='ml-3 flex items-center justify-center rounded-full p-1'
			onClick={()=> setMode(mode === 'light' ? 'dark' : 'light')}
			>
				{
					mode === 'dark' ?
					<FaSun className='fill-light text-3xl' /> : <FaMoon className='fill-light text-3xl' />
				}
			</button>
		</nav>
		</motion.div>

		: null
		}
		{/* logo component  */}
		<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
			<Logo/>
		</div>
	</div>
  )
}
