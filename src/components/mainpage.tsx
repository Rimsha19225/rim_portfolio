"use client"
import Image from "next/image"
import Link from "next/link";
import AboutText from "./hide_text";
import Navbar from "./navbar";
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const MainPageText = () => {
    const typedRef = useRef(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.7 });
    const leftControl = useAnimation()
    const rightControl = useAnimation()
    const buttonControl = useAnimation()

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer', 'UI UX Designer', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    })

    return () => typed.destroy() 
  }, [])

  useEffect(() => {
    if (isInView) {
      leftControl.start({ x: 0, opacity: 1 })
      rightControl.start({ x: 0, opacity: 1 })
      buttonControl.start({ y: 0, opacity: 1 })
    } else {
      leftControl.start({ x: -50, opacity: 0.7 })
      rightControl.start({ x: 50, opacity: 0.7 })
      buttonControl.start({ y: 40, opacity: 0.7 })
    }
  }, [isInView, rightControl, leftControl, buttonControl])


  return (
    <div className="min-h-screen bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden w-full h-full">
      <Navbar />
      <div ref={sectionRef} className="flex justify-center items-center h-[66vh] md:h-[72vh]">
        <div className="flex flex-col-reverse md:flex-row w-full gap-4 px-2 md:px-6 justify-between items-center max-w-[60rem]">
          <div className="w-[95%] md:w-[44%]">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={leftControl} transition={{ duration:2, ease: "easeInOut"}} className="mb-2 md:mb-3 text-[#202020] text-[0.8rem] md:text-[1rem]">Hello it&apos;s me</motion.div>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={leftControl} transition={{ duration:2, ease: "easeInOut"}} className="mb-2 md:mb-3 text-[1rem] md:text-[1.5rem] leading-[1.7rem] md:leading-[2rem] text-[#202020] font-extrabold">
                <span className="text-[#000] text-[2rem] md:text-[2.7rem] text-shadow-[0_2px_5px_#ffe4c4] md:text-shadow-[0_3px_5px_#ffe4c4]">Rimsha Arshad</span><br />I am a <span ref={typedRef} className="text-[#000] md:text-[#d5bea2] md:text-shadow-[0_1px_6px_#000]" />
            </motion.div>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={leftControl} transition={{ duration:2, ease: "easeInOut"}}><AboutText /></motion.div>
            <div className="flex gap-2 md:gap-4">
              <Link href="tel:+03223955488">
                <motion.button initial={{ y: 40, opacity: 0 }} animate={buttonControl} transition={{ duration:2, ease: "easeInOut"}} className="px-3 md:px-6 py-2 md:py-3 bg-[#000] rounded-xl text-[#ffe4c4] hover:shadow-[0_0_16px_#ffe4c4] text-[0.8rem] md:text-[1rem]">Hire me ➜</motion.button>
              </Link>
              <Link href="/projects">
                <motion.button initial={{ y: 40, opacity: 0 }} animate={buttonControl} transition={{ duration:2, ease: "easeInOut"}} className="px-3 md:px-6 py-2 md:py-3 hover:py-[0.85rem] border-black border-2 hover:border-none rounded-xl text-[#000] hover:shadow-[0_0_12px_#ffe4c4] hover:bg-[#000] hover:text-[#ffe4c4] text-[0.8rem] md:text-[1rem]">See My Projects</motion.button>
              </Link>
            </div>
          </div>

          <motion.div initial={{ x: 100, opacity: 0 }} animate={rightControl} transition={{ duration:2, ease: "easeInOut"}} className="relative w-[14rem] md:w-[22rem] h-[14rem] md:h-[22rem] mt-10 flex items-center justify-center bg-gradient-to-tr from-[#1b1f24] via-[#101113] to-[#000000] rounded-full hover:shadow-[0_0_20px_#ffe4c4]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffe4c4] via-[#000] to-[#ffe4c4] p-1 ">
                <div className="w-full h-full bg-[#101113] rounded-full flex items-center justify-center">
                    <Image
                        src={"/image/main_page_pic.png"}
                        alt="Profile"
                        width={320}
                        height={320}
                        className="rounded-full object-cover w-[13rem] md:w-[21rem] h-[13rem] md:h-[21rem] border-4 border-[#1b1f24]"
                    />
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default MainPageText