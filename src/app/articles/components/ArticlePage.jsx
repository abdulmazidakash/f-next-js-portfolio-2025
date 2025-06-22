'use client';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import article1 from '../../../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../../../public/images/articles/create loading screen in react js.jpg';
import { motion, useMotionValue } from 'framer-motion';
import article3 from '../../../../public/images/articles/create modal component in react using react portals.png';
import article4 from '../../../../public/images/articles/smooth scrolling in reactjs.png';
import article5 from '../../../../public/images/articles/What is Redux with easy explanation.png';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX - imgRef.current.width / 2); // Center the image under the cursor
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <h2 className="capitalize text-base sm:text-lg md:text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-48 sm:w-64 md:w-80 h-auto hidden absolute rounded-lg object-cover"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-3 md:my-4 rounded-xl flex md:flex-row sm:flex-col items-center justify-between bg-light text-dark border border-solid border-dark border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-teal-600 font-semibold text-sm sm:text-base md:text-lg pl-2 sm:pl-0 md:pl-4 sm:self-start">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="w-full p-2 sm:p-3 md:p-4 bg-light border border-solid border-dark rounded-2xl relative">
      {/* Dark border box */}
      <div className="absolute top-0 -right-1 sm:-right-2 md:-right-3 -z-10 w-[101%] h-[102%] sm:h-[103%] rounded-[1.5rem] sm:rounded-[2rem] bg-dark rounded-br-3xl" />
      {/* Image box */}
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold my-2 sm:my-3 hover:underline mt-2 sm:mt-3">
          {title}
        </h2>
      </Link>
      <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 text-justify">{summary}</p>
      <span className="text-teal-700 font-semibold text-sm sm:text-base md:text-lg">
        {time}
      </span>
    </li>
  );
};

export default function ArticlesPage() {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center justify-center overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <AnimatedText
        text={'Words can change the worlds'}
        className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 !text-xl sm:!text-2xl md:!text-3xl lg:!text-5xl xl:!text-7xl text-center"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
        {/* Featured Article 1 */}
        <FeaturedArticle
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          summary={
            'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
          }
          time={'9 min read'}
          link={'/'}
          img={article1}
        />
        {/* Featured Article 2 */}
        <FeaturedArticle
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          summary={
            'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
          }
          time={'9 min read'}
          link={'/'}
          img={article2}
        />
      </ul>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center my-6 sm:my-8 md:my-10 lg:my-16 mt-12 sm:mt-16 md:mt-20 lg:mt-32">
        All Articles
      </h2>
      <ul className="w-full">
        {/* 1st article */}
        <Article
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          date={'June 22, 2025'}
          link={'/'}
          img={article3}
        />
        {/* 2nd article */}
        <Article
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          date={'June 22, 2025'}
          link={'/'}
          img={article3}
        />
        {/* 3rd article */}
        <Article
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          date={'June 22, 2025'}
          link={'/'}
          img={article3}
        />
        {/* 4th article */}
        <Article
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          date={'June 22, 2025'}
          link={'/'}
          img={article4}
        />
        {/* 5th article */}
        <Article
          title={'Build A Custom Pagination Component In Reactjs From Scratch'}
          date={'June 22, 2025'}
          link={'/'}
          img={article5}
        />
        
      </ul>
    </div>
  );
}