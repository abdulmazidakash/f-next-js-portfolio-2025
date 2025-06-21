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
//   default: 'text-[var(--text-light)]', // Fallback to custom light color
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
  const Icon = skillIcons[name]; // Get the icon component for the skill
  const colorClass = skillColors[name] || skillColors.default;

  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold ${colorClass} text-light px-6 py-3 shadow-dark cursor-pointer absolute`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {Icon && <Icon className="mr-2 text-2xl" />} {/* Render icon if it exists */}
      {name}
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <div>
      <h1 className="font-bold text-8xl mt-64 w-full text-center">Skills</h1>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full"
        style={{ background: 'var(--background-circularLight)' }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="15vw" y="-12vw" />
        <Skill name="Firebase" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="NodeJS" x="-25vw" y="18vw" />
        <Skill name="ExpressJS" x="18vw" y="18vw" />
      </div>
    </div>
  );
}