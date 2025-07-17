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
    const buttonControl = useAnimation()
    const topControl = useAnimation()

    useEffect(() => {
        if (isInView) {
          leftControl.start({ x: 0, opacity: 1 })
          rightControl.start({ x: 0, opacity: 1 })
          buttonControl.start({ y: 0, opacity: 1 })
          topControl.start({ y: -0, opacity: 1 })
        } else {
          leftControl.start({ x: -100, opacity: 0.7 })
          rightControl.start({ x: 40, opacity: 0.7 })
          buttonControl.start({ y: 40, opacity: 0.7 })
          topControl.start({ y: -60, opacity: 0.7 })
        }
      }, [isInView, leftControl, rightControl, buttonControl, topControl])

  return (
    <div className=" bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden w-full h-auto md:h-full">
        <div className="flex justify-center items-center h-auto md:h-[92vh]">
            <div className="flex flex-col md:flex-row w-full gap-2 px-6 justify-between items-center max-w-[55rem] pb-8 md:pb-0">
                <motion.div ref={sectionRef} initial={{ x: -100, opacity: 0 }} animate={leftControl} transition={{ duration:2, ease: "easeInOut"}} className="relative w-[11rem] md:w-[22rem] h-[13rem] md:h-[25rem] mt-10 flex items-center justify-center bg-gradient-to-tr from-[#1b1f24] via-[#101113] to-[#000000] rounded-[1rem] hover:shadow-[0_0_25px_#000]">
                    <div className="absolute inset-0 rounded-[1rem] bg-gradient-to-r from-[#ffe4c4] via-[#000] to-[#ffe4c4] p-1 ">
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
                <div className="flex flex-col w-[98%] md:w-[47%] text-[#ffe4c4]">
                    <div className="w-[100%]">
                        <motion.div initial={{ y: -60, opacity: 0 }} animate={topControl} transition={{ duration:2, ease: "easeInOut"}} className="text-[2rem] md:text-[3rem] mb-1 text-black font-bold text-center md:text-left text-shadow-[0_3px_5px_#ffe4c4]">About <span className="text-[#ffe4c4] text-shadow-[0_4px_8px_#000]">Me</span></motion.div>
                        <motion.div initial={{ x: 40, opacity: 0 }} animate={rightControl} transition={{ duration:2, ease: "easeInOut"}} className="text-justify text-[0.8rem] text-black md:text-[#ffe4c4] md:text-[1.05rem]">I am a professional frontend developer with strong expertise in modern UI/UX design, responsive website development, and creative logo design. I am also proficient in Microsoft Office tools, including Word, Excel, and PowerPoint. My technical skills include HTML, CSS, JavaScript, React, and Next.js, which I use to build pixel-perfect, user-friendly, and accessible web experiences tailored to meet the needs of clients while aligning with current industry standards and trends.</motion.div>
                    </div>
                    <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        <Link href={"/cv"}><motion.button initial={{ y: 40, opacity: 0 }} animate={buttonControl} transition={{ duration:1.5, ease: "easeInOut"}} className="text-[0.8rem] md:text-[1rem] px-3 md:px-6 py-2 md:py-3 bg-[#000] rounded-xl text-[#ffe4c4] hover:shadow-[0_0_16px_#ffe4c4]">Download CV 🡻</motion.button></Link>
                        <Link href={"/about"}><motion.button initial={{ y: 40, opacity: 0 }} animate={buttonControl} transition={{ duration:1.5, ease: "easeInOut"}} className="text-[0.8rem] md:text-[1rem] px-3 md:px-6 py-2 md:py-3 md:hover:py-[0.85rem] border-2 hover:border-none rounded-xl text-black md:text-[#ffe4c4] hover:shadow-[0_0_12px_#ffe4c4] hover:bg-[#000] hover:text-[#ffe4c4]">Read More</motion.button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutText