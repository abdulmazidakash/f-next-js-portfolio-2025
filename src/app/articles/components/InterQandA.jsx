import React from 'react'

export default function InterQandA() {
  return (
	<div className='w-10/12 mx-auto my-8'>
    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center my-6 sm:my-8 md:my-10 lg:my-16'>Interpersonal Question & Answer</h2>
		<div className="collapse collapse-arrow bg-light border border-solid border-dark border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-light border border-solid border-dark border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-light border border-solid border-dark border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
	</div>
  )
}
