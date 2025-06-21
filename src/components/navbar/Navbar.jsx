'use client'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { FaDribbble, FaGithub, FaLinkedin, FaMoon, FaPinterest, FaSun, FaXTwitter } from "react-icons/fa6";
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
export default function Navbar() {
	const [mode, setMode] = useThemeSwitcher(0);
  return (
	<div className='w-full px-32 py-8 font-medium flex items-center justify-between'>
		<nav>
			<CustomLink href={'/'} title={"Home"} className='mr-4'/>
			<CustomLink href={'/about'} title={"About"} className='mx-4'/>
			<CustomLink href={'/projects'} title={"Projects"} className='mx-4'/>
			<CustomLink href={'/articles'} title={"Articles"} className='ml-4'/>
		</nav> 
		
		<nav className='flex items-center justify-center flex-wrap'>
			<motion.a href={'https://x.com'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaXTwitter /></motion.a>
			<motion.a href={'https://x.com'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'> <FaGithub /></motion.a>
			<motion.a href={'https://x.com'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaLinkedin /></motion.a>
			<motion.a href={'https://x.com'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl mr-3'><FaPinterest /></motion.a>
			<motion.a href={'https://x.com'} target={'_blank'} whileHover={{y:-2}} whileTap={{scale: 0.9}} className='text-3xl'><FaDribbble /></motion.a>
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

		{/* logo component  */}
		<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
			<Logo/>
		</div>
	</div>
  )
}
