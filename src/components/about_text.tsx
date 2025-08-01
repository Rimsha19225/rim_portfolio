"use client"
import Image from "next/image"
import Link from "next/link";
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AboutText = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false })
    const leftControl = useAnimation()
    const rightControl = useAnimation()

    useEffect(() => {
        if (isInView) {
          leftControl.start({ x: 0, opacity: 1 })
          rightControl.start({ x: 0, opacity: 1 })
        } else {
          leftControl.start({ x: -100, opacity: 0.7 })
          rightControl.start({ x: 40, opacity: 0.7 })
        }
      }, [isInView, leftControl, rightControl])

  return (
    <div className="bg-gradient-to-r from-[#9C27B0] to-[#4A148C] overflow-x-hidden w-full h-auto md:h-full">
        <div className="flex justify-center items-center h-auto md:h-[92vh]">
            <div className="flex flex-col md:flex-row w-full gap-2 px-6 justify-between items-center max-w-full md:max-w-[55%] pb-8 md:pb-0">
                <motion.div ref={sectionRef} initial={{ x: -100, opacity: 0 }} animate={leftControl} transition={{ duration:2, ease: "easeInOut"}} className="relative w-[11rem] md:w-[22rem] h-[13rem] md:h-[25rem] mt-10 flex items-center justify-center bg-gradient-to-tr from-[#1b1f24] via-[#101113] to-[#000000] rounded-[1rem] hover:shadow-[0_0_25px_#fff]">
                    <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-r from-[#c119e0] via-[#fff] to-[#c119e0] p-1 ">
                        <div className="w-full h-full bg-[#101113] rounded-[1rem] flex items-center justify-center">
                            <Image
                                src={"/image/profile.png"}
                                alt="Profile"
                                width={320}
                                height={320}
                                className="rounded-[1rem] object-cover w-[10rem] md:w-[21rem] h-[12rem] md:h-[24rem] border-4 border-[#1b1f24]"
                            />
                        </div>
                    </div>
                </motion.div>
                <div className="flex flex-col w-[98%] md:w-[45%] text-[#fff]">
                    <div className="w-[100%]">
                        <motion.div initial={{ x: 60, opacity: 0 }} animate={rightControl} transition={{ duration:2, ease: "easeInOut"}} className="text-[2rem] md:text-[3rem] text-black font-bold text-center md:text-left text-shadow-[0_3px_4px_#fff]">About <span className="text-[#fff] text-shadow-[0_0px_0px_#fff]">Me</span></motion.div>
                        <motion.div initial={{ x:60, opacity: 0 }} animate={rightControl} transition={{ duration:2, ease: "easeInOut"}} className="text-justify text-[0.8rem] leading-6 text-white md:text-[1.05rem]">I am a professional frontend developer with strong expertise in modern UI/UX design, responsive website development, and creative logo design. I am also proficient in Microsoft Office tools, including Word, Excel, and PowerPoint. My technical skills include HTML, CSS, JavaScript, React, and Next.js, which I use to build pixel-perfect, user-friendly, and accessible web experiences tailored to meet the needs of clients while aligning with current industry standards and trends.</motion.div>
                    </div>
                    <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        <Link href={"/cv"}><motion.button initial={{ x: 60, opacity: 0 }} animate={rightControl} transition={{ duration:1.5, ease: "easeInOut"}} className="text-[0.8rem] md:text-[1rem] px-3 md:px-6 py-2 md:py-3 bg-[#000] rounded-xl hover:shadow-[0_0_16px_#fff]">Download CV 🡻</motion.button></Link>
                        <Link href={"/about"}><motion.button initial={{ x: 60, opacity: 0 }} animate={rightControl} transition={{ duration:1.5, ease: "easeInOut"}} className="text-[0.8rem] md:text-[1rem] px-3 md:px-6 py-2 md:py-3 md:hover:py-[0.85rem] border-2 hover:border-none rounded-xl md:text-[#fff] hover:shadow-[0_0_12px_#fff] hover:bg-[#000] hover:text-[#fff]">Read More</motion.button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutText