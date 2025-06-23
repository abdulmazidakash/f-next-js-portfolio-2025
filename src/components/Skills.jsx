'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

// Map skill names to Tailwind text color classes
const skillColors = {
  HTML: 'bg-red-500',
  CSS: 'bg-blue-500',
  ReactJS: 'bg-cyan-500',
  NextJS: 'bg-black',
  'Tailwind CSS': 'bg-cyan-700',
  Firebase: 'bg-yellow-600',
  MongoDB: 'bg-green-600',
  NodeJS: 'bg-teal-700',
  ExpressJS: 'bg-black',
   JavaScript: 'bg-yellow-500',
};

// Map skill names to their corresponding icons
const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  ReactJS: FaReact,
  NextJS: SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  Firebase: SiFirebase,
  MongoDB: SiMongodb,
  NodeJS: FaNodeJs,
  ExpressJS: SiExpress,
};

const Skill = ({ name, x, y }) => {
  const Icon = skillIcons[name];
  const colorClass = skillColors[name] || 'bg-gray-500';

  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold ${colorClass} text-light px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 shadow-dark cursor-pointer absolute text-xs sm:text-sm md:text-base lg:text-lg`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {Icon && <Icon className="mr-1 sm:mr-2 text-sm sm:text-lg md:text-xl lg:text-2xl" />}
      {name}
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <div className="w-10/12 mx-auto my-32 bg-light  text-dark ">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 lg:mb-16 text-center">
        Skills
      </h1>
      <div
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen relative flex items-center justify-center rounded-full overflow-hidden"
        style={{ background: 'var(--background-circularLight)' }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 lg:py-8 font-semibold shadow-dark cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="-0vh" />
        <Skill name="CSS" x="0vw" y="-20vh" />
        <Skill name="JavaScript" x="20vw" y="0vh" />
        <Skill name="ReactJS" x="0vw" y="20vh" />
        <Skill name="NextJS" x="-15vw" y="-25vh" />
        <Skill name="Tailwind CSS" x="0vw" y="-40vh" />
        <Skill name="Firebase" x="0vw" y="38vh" />
        <Skill name="MongoDB" x="15vw" y="-25vh" />
        <Skill name="NodeJS" x="-20vw" y="20vh" />
        <Skill name="ExpressJS" x="20vw" y="22vh" />
      </div>
    </div>
  );
}