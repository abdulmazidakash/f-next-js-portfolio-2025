import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
	<div className='w-full border-t-2 border-solid border-dark font-semibold text-lg px-32 '>
		<div className='py-8 flex items-center justify-between'>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
		<div className='flex items-center'>
			Build With <span className='text-primary text-2xl px-1'>&#9825;</span>by&nbsp;
			<Link href={'/'} className='underline underline-offset-2' target='_blank'>Abdul Mazid Akash</Link>
		</div>
		<Link href={'/'} className='underline underline-offset-2' target='_blank'>Say Hello</Link>
		</div>
	</div>
  )
}
