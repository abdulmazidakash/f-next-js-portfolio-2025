'use client';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import project1 from '../../../../public/images/projects/crypto-screener-cover-image.jpg';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="
        w-full mx-auto items-center justify-between 
        rounded-3xl border border-solid border-dark 
        bg-light shadow-2xl relative rounded-br-2xl 
        flex-col lg:flex-row flex
        p-4 sm:p-6 md:p-8 lg:p-12
      "
    >
      {/* Dark border box */}
      <div className="absolute top-0 -right-2 sm:-right-3 -z-10 w-[101%] h-[102%] sm:h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      {/* Image box */}
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          width={800}  // Replace with the actual width of the image
          height={800} // Replace with the actual height of the image
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </Link>
      {/* Text box */}
      <div className="w-full flex flex-col items-start justify-between mt-4 lg:mt-0 lg:pl-6">
        <span className="text-teal-700 font-medium text-base sm:text-lg md:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify text-sm sm:text-base md:text-lg">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <FaGithub className="text-2xl sm:text-3xl md:text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light p-2 sm:p-2.5 sm:px-2 md:p-2 md:px-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ml-4"
          >
            Visit Project <BsBoxArrowUpRight className="w-4 sm:w-5 md:w-6 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 sm:p-6 md:p-8 relative">
      {/* Dark border box */}
      <div className="absolute top-0 -right-2 sm:-right-3 -z-10 w-[101%] h-[102%] sm:h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      {/* Image box */}
      <Link className="w-full cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
        <FramerImage
        width={800} // Replace with the actual width of the image
          height={800} // Replace with the actual height of the image
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </Link>
      {/* Text box */}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-teal-700 font-medium text-base sm:text-lg md:text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-xl sm:text-2xl md:text-3xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify text-sm sm:text-base md:text-lg">
          {summary}
        </p>
        <div className="mt-2 flex items-center w-full justify-between">
          <Link href={github} target="_blank">
            <FaGithub className="text-2xl sm:text-3xl md:text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light p-2 sm:p-2.5 sm:px-2 md:p-2 md:px-2   rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            Visit <BsBoxArrowUpRight className="w-4 sm:w-5 md:w-6 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function ProjectPage() {
  return (
    <div className="w-10/12 mx-auto my-8 sm:my-12 md:my-16 flex flex-col items-center justify-center">
      <div className="w-full">
        <AnimatedText
          text={'Creativity Outshines Expertise!'}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-6xl xl:!text-8xl text-center"
        />
      </div>
      {/* Project card grid container */}
      <div
        className="
          grid grid-cols-1 gap-4 pt-4 
          sm:gap-y-6 sm:pt-6 
          md:gap-y-8 md:pt-8 
          lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12 lg:pt-16
        "
      >
        {/* Card section 01 */}
        <div className="col-span-1 lg:col-span-12">
          {/* project card 1 */}
          <FeaturedProject
            title={'ScholarshipHub'}
            img={`https://i.ibb.co/dJP8Cq2q/scholarship-hub.jpg`}
            summary={`ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships. It also facilitates the application process, allowing students to apply for scholarships directly through the platform...`}
            link={'https://scholarship-hub-akash.netlify.app/'}
            github={'https://github.com/abdulmazidakash/c-assignment-12-client-side'}
            type={'Featured Project'}
          />
        </div>
        <div className="col-span-1 lg:col-span-6">
          {/* project card 2 */}
          <Project
            title={'GlobalVisaHub'}
            img={`https://i.ibb.co/bjKBgWFw/global-visa.jpg`}
            summary={`A user-friendly Global Visa Hub platform that simplifies the process of exploring, applying, and managing visa applications.`}
            link={'https://assignment-10-global-visa-hub-akash.netlify.app/'}
            github={'https://github.com/abdulmazidakash/c-assignment-10-visa-navigating-client'}
            type={'Project'}
          />
        </div>
        <div className="col-span-1 lg:col-span-6">
          {/* project card 3 */}
          <Project
            title={'Artifact Atlas'}
            img={`https://i.ibb.co/FbckQ2qB/atlas.jpg`}
            summary={`Artifact Atlas is an interactive web platform for exploring and managing historical artifacts.`}
            link={'https://assignment-11-artifact-atlas.netlify.app/'}
            github={'https://github.com/abdulmazidakash/c-assignment-11'}
            type={'Project'}
          />
        </div>

        {/* Card section 02 */}
        <div className="col-span-1 lg:col-span-12">
          {/* project card 4 */}
          <FeaturedProject
            title={'PIC-SEEK-AI'}
            img={`https://i.ibb.co/YFrTqxLd/pic-seek-ai.jpg`}
            summary={`Pick-Seek is an advanced AI-powered tool that can generate images, analyze images, and provide contextual replies and comments based on specific image content. It leverages cutting-edge AI models to process visual data efficiently and interact seamlessly with users.`}
            link={'https://pic-seek-akash.netlify.app/'}
            github={'https://github.com/abdulmazidakash/f-pic-seek-template'}
            type={'Featured Project'}
          />
        </div>
        <div className="col-span-1 lg:col-span-6">
          {/* project card 5 */}
          <Project
            title={'Job Portal'}
            img={`https://i.ibb.co/hx9vBVD4/job-portal.jpg`}
            summary={`Credibly empower innovative initiatives after process-centric products. Phosfluorescently syndicate flexible opportunities through ubiquitous meta-services. Seamlessly recaptiualize adaptive e-markets with business.`}
            link={'https://three-job-portal.netlify.app/'}
            github={'https://github.com/abdulmazidakash/third-job-portal'}
            type={'Project'}
          />
        </div>
        <div className="col-span-1 lg:col-span-6">
          {/* project card 6 */}
          <Project
            title={'SoloSphere'}
            img={`https://i.ibb.co/TxcQCtNc/solophere.jpg`}
            summary={`SoloSphere appears to be a freelancing or job bidding platform where users can browse, filter, and search for jobs based on categories, deadlines, and titles. Each job card displays essential information like the job title, category, deadline, budget range, description snippet, and number of bids.`}
            link={'https://milestone-11-conceptual-solosphere.netlify.app/'}
            github={'https://github.com/abdulmazidakash e-conceptual-session-b10-solophere-template-client'}
            type={'Project'}
          />
        </div>
      </div>
    </div>
  );
}