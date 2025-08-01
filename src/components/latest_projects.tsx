"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const projectImages = [
    {
        src: "/image/ice_cream.png",
        link: "/projects#ice_cream"
    },
    {
        src: "/image/pcb.png",
        link: "/projects#pcb"
    },
    {
        src: "/image/resuma.png",
        link: "/projects#resuma"
    },
    {
        src: "/image/e_commerce.png",
        link: "/projects#e_commerce"
    },
    {
        src: "/image/todo.png",
        link: "/projects#todo"
    },
    {
        src: "/image/countdown.png",
        link: "/projects#countdown"
    }
];

const ProjectCard = ({ src, index, link}: { src: string; index: number, link: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }});
    } else {
      animation.start({opacity: 0, scale: 0.8, y: 40});
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={animation}
      className="rounded-xl overflow-hidden shadow-lg hover:scale-103 transition duration-300"
    >
      <Link href={link} scroll={false}>
        <Image
          src={src}
          alt={`Project ${index + 1}`}
          width={400}
          height={300}
          className="w-full h-[20vh] md:h-[220px] object-cover"
        />
      </Link>
    </motion.div>
  );
};

const LatestProjects = () => {
  return (
    <div className="bg-gradient-to-r from-[#9C27B0] to-[#4A148C] w-full py-10 md:py-16 px-4 md:px-6">
      <h2 className="text-[2rem] md:text-[3rem] font-bold text-black mb-6 md:mb-8 text-center drop-shadow-md text-shadow-[0_3px_5px_#fff]">
        Latest <span className="text-[#fff] text-shadow-[0_0px_0px_#fff]">Projects</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-[65rem] mx-auto">
        {projectImages.map((image, index) => (
          <ProjectCard key={index} src={image.src} index={index} link={image.link} />
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
