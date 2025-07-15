"use client";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPencilRuler, FaUserTie, FaFileWord, FaFileExcel, FaFilePowerpoint,} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbUxCircle } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from 'framer-motion'

const SkillBarText = () => {
  const textCircleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });
  const headingControls = useAnimation();
  const iconControls = useAnimation();
  const animation = useAnimation();
  const text = "rimsha ✿ rimsha ✿ rimsha ✿ ";

  useEffect(() => {
  const circle = textCircleRef.current;
  if (circle) {
    circle.innerHTML = "";
    const isMobile = window.innerWidth < 668;
    const radius = isMobile ? 45 : 70;
    const deg = 360 / text.length;

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      span.style.position = "absolute";
      span.style.left = "50%";
      span.style.top = "50%";
      span.style.transform = `rotate(${i * deg}deg) translate(${radius}px) rotate(-${i * deg}deg)`;
      span.style.transformOrigin = "0 0";
      span.style.fontSize = "10px";
      span.style.color = "black";
      span.style.fontFamily = "sans-serif";
      span.style.whiteSpace = "pre";
      circle.appendChild(span);
    }
  }
}, []);

  useEffect(() => {
  if (isInView) {
    headingControls.start({ x: 0, opacity: 1 });
    iconControls.start({ x: 0, opacity: 1 });
    animation.start({opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" }});
  } else {
    headingControls.start({ x: 50, opacity: 0.7 });
    iconControls.start({ x: -50, opacity: 0.7 });
    animation.start({opacity: 0, scale: 0.65, y: 40, transition: { duration: 0.3 }});
  }
}, [isInView, headingControls, iconControls, animation]);

  return (
    <div className="w-full bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden py-4 md:py-8">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[1.8rem] md:gap-[2.5rem]">
        <div className="relative w-[120px] md:w-[200px] h-[120px] md:h-[200px] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[100px] md:w-[160px] h-[100px] md:h-[160px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-full h-full relative">
              <div ref={textCircleRef} className="absolute inset-0" />
            </div>
          </div>
          <div className="absolute top-[65%] md:top-1/2 left-[62%] md:left-1/2 w-[70px] h-[70px] rounded-full overflow-hidden transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Link href={"/"}>
              <Image
                src="/image/logo.png"
                alt="Rimsha"
                width={80}
                height={80}
                className="object-cover w-[3rem] md:w-[5rem] h-[3rem] md:h-[5rem]"
              />
            </Link>
          </div>
        </div>
        <motion.div ref={sectionRef} initial={{ x: 50, opacity: 0 }} animate={headingControls} transition={{ duration: 2, ease: "easeInOut"}} className="text-[2rem] md:text-[3rem] text-center md:text-left font-bold ml-0 md:ml-[-2rem] mr-0 md:mr-[8rem] text-shadow-[0_4px_8px_#000] text-[#ffe4c4] leading-[2.2rem] md:leading-[3.5rem]">
          My Skills <br /> Development
        </motion.div>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 text-[1rem] md:text-[2rem] text-black md:text-[#ffe4c4]">
          {[FaHtml5, FaCss3Alt, FaJs, FaReact, SiNextdotjs, TbUxCircle, FaPencilRuler, MdDevices, FaFileWord, FaFileExcel, FaFilePowerpoint, FaUserTie].map(
            (Icon, idx) => (
              <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, scale: 0.65, y: 40 }}
                animate={animation}
                key={idx}
                className="w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-black md:border-[#ffe4c4] flex items-center justify-center hover:shadow-[0_0_12px_#ffe4c4]"
              >
                <Icon />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillBarText;
