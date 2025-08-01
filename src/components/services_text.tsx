"use client"
import React, { useEffect, useRef } from 'react'
import {FaCode, FaPencilRuler, FaFileWord, FaFileExcel, FaFilePowerpoint} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const cardData = [
  {
    icon: <FaCode className="text-[2rem] md:text-[3rem] mb-6 mt-4 text-center w-full" />,
    title: "Frontend Development",
    description: "Build fast, responsive, and modern websites using HTML, CSS, JavaScript, React, and Next.js.",
    link: "/about#frontend"
  },
  {
    icon: <FaPencilRuler className="text-[2rem] md:text-[3rem] mb-6 mt-4 text-center w-full" />,
    title: "UI/UX Design",
    description: "Design clean, user-friendly interfaces with wireframes and mockups that enhance user experience.",
    link: "/about#uiux"
  },
  {
    icon: <MdDevices className="text-[2rem] md:text-[3rem] mb-6 mt-4 text-center w-full" />,
    title: "Responsive Website",
    description: "Make your website mobile-first, fully responsive, and optimized for performance across all devices and screens.",
    link: "/about#responsive"
  },
  {
    icon: (
      <div className="flex space-x-1 mb-6 mt-4 justify-center">
        <FaFileWord className="text-[2rem] md:text-[3rem]" />
        <FaFileExcel className="text-[2rem] md:text-[3rem]" />
        <FaFilePowerpoint className="text-[2rem] md:text-[3rem]" />
      </div>
    ),
    title: "Docs & Presentations",
    description: "Create polished documents, reports, and presentations using Microsoft Word, Excel, and PowerPoint.",
    link: "/about#office"
  }
];

const AnimatedCard = ({ icon, title, description, link }: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" }});
    } else {
      animation.start({opacity: 0, scale: 0.65, y: 40, transition: { duration: 0.3 }});
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.65, y: 40 }}
      animate={animation}
      className="w-full h-auto md:h-[42vh] p-3 md:p-5  bg-white/20 border-[#d5bea2] md:border-[#fff] border-1 rounded-2xl hover:scale-104 transition duration-300"
    >
      {icon}
      <h2 className="text-[#fff] font-semibold text-[1rem] md:text-[1.3rem] mb-1 text-center">{title}</h2>
      <p className="text-[#fff] text-[0.8rem] md:text-[1rem] text-justify">{description}</p>
      <Link href={link} scroll={false}>
        <button className="bg-black text-[#fff] px-3 md:px-4 py-[6px] md:py-2 rounded-xl my-2">
          See More
        </button>
      </Link>
    </motion.div>
  );
};

const ServicesText = () => {
  return (
    <div className="bg-gradient-to-r from-[#9C27B0] to-[#4A148C] overflow-x-hidden w-full h-full">
      <div className="flex flex-col items-center justify-center h-auto md:h-[77vh] py-10 md:py-0">
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-black mb-6 md:mb-8 text-center drop-shadow-md text-shadow-[0_3px_5px_#fff]">
          My <span className="text-[#fff] text-shadow-[0_0px_0px_#fff]">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 px-4 md:px-6 justify-between items-center max-w-[100%] md:max-w-[78%]">
          {cardData.map((card, index) => (
            <AnimatedCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesText;
