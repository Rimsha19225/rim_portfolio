"use client";
import Image from "next/image";
import Navbar from "../../components/navbar";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const AnimatedSection = ({title, content, id,}: {title: string; content: string; id: string;}) => {
  const ref = useRef(null);
  const leftcontrols = useAnimation();
  const rightcontrols = useAnimation();
  const isInView = useInView(ref, { once: false });
  const pathname = usePathname();

  useEffect(() => {
    if (isInView) {
      leftcontrols.start({ x: 0, opacity: 1 });
      rightcontrols.start({ x: 0, opacity: 1 });
    } else {
      leftcontrols.start({ x: -30, opacity: 0 });
      rightcontrols.start({ x: 30, opacity: 0 });
    }
  }, [isInView, leftcontrols, rightcontrols]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname]);

  return (
    <div id={id} className="mb-6 md:mb-12">
      <motion.h2
        ref={ref}
        initial={{ x: -30, opacity: 0 }}
        animate={leftcontrols}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pt-2 md:pt-3 pb-1 md:pb-2 text-[1.2rem] md:text-[2rem] font-semibold text-shadow-[0_2px_6px_#ffe4c4]"
      >
        {title}
      </motion.h2>
      <motion.p 
        ref={ref}
        initial={{ x: 30, opacity: 0 }}
        animate={rightcontrols}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" px-4 text-[0.8rem] md:text-[1.1rem] text-black md:text-[#ffe4c4] text-justify text-shadow-[0_0_0px_#000] md:text-shadow-[0_4px_8px_#000]"
      >
        {content}
      </motion.p>
    </div>
  );
};

const AboutPage = () => {
  const sections = [
    {
      id: "frontend",
      title: "💻 Frontend Development",
      content: "I am a skilled frontend developer focused on creating engaging and accessible user interfaces. I specialize in writing clean, maintainable code using best practices, ensuring that websites are fast, responsive, and compatible across modern browsers and devices to enhance user experience.",
    },
    {
      id: "uiux",
      title: "🎨 UI/UX Design & Creativity",
      content: "With expertise in UI/UX design, I craft user-centered designs that are both intuitive and visually appealing. My approach involves understanding user needs, creating wireframes, and designing layouts that improve interaction, usability, and visual storytelling across desktop and mobile platforms.",
    },
    {
      id: "responsive",
      title: "📱 Responsive Website Development",
      content: "I ensure that every website I build is fully responsive, functioning seamlessly across various screen sizes. From flexible grid layouts to mobile-first development, I focus on performance and adaptability to guarantee a consistent experience on phones, tablets, and desktops.",
    },
    {
      id: "office",
      title: "🧾 Microsoft Office Proficiency",
      content: "Beyond design and development, I am proficient in Microsoft Word, Excel, and PowerPoint. These tools assist me in creating polished documentation, handling structured data, and building impactful client presentations that clearly communicate technical processes and visual project deliverables.",
    },
    {
      id: "skills",
      title: "💻 Technical Skills & Tools",
      content: "My core tech stack includes HTML, CSS, JavaScript, React, and Next.js. I use these technologies to build pixel-perfect, scalable, and fast web applications. My workflow emphasizes clean code, reusability, and performance optimization to meet client and industry expectations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden w-full h-full">
      <Navbar />
      <div className="w-full flex justify-center h-auto">
        <div>
          <Image
            src={"/image/about_pic.png"}
            alt="Profile"
            width={320}
            height={320}
            className="rounded-full w-[6rem] md:w-[9rem] h-[6rem] md:h-[9rem] mx-auto mt-2 md:mt-4 mb-4 md:mb-16"
          />
          <div className="w-full max-w-[95%] md:max-w-[60%] m-auto my-10">
            {sections.map((sec, i) => (
              <AnimatedSection key={i} id={sec.id} title={sec.title} content={sec.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
