"use client";
import Image from "next/image";
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
        className="pt-2 md:pt-3 pb-1 md:pb-2 text-[1.2rem] md:text-[2rem] font-semibold text-shadow-[0_2px_6px_#fff]"
      >
        {title}
      </motion.h2>
      <motion.p 
        ref={ref}
        initial={{ x: 30, opacity: 0 }}
        animate={rightcontrols}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" px-4 text-[0.8rem] md:text-[1.1rem] text-[#fff] text-justify text-shadow-[0_0_0px_#000] md:text-shadow-[0_4px_8px_#000]"
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
    <div className="min-h-screen bg-gradient-to-r from-[#9C27B0] to-[#4A148C] overflow-x-hidden w-full h-full">
      <div className="w-full flex justify-center h-auto pt-[4.5rem] md:pt-[6rem]">
        <div className="w-full">
          <div className="max-w-[100%] flex justify-center m-auto">
          <div className="relative w-[10rem] md:w-[13rem] h-[10rem] md:h-[13rem] mt-10 flex items-center justify-center bg-gradient-to-tr from-[#1b1f24] via-[#101113] to-[#000000] rounded-full hover:shadow-[0_0_20px_#fff]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9C27B0] via-[#fff] to-[#9C27B0] p-1 ">
              <div className="w-full h-full bg-[#101113] rounded-full flex items-center justify-center">
                <Image
                  src={"/image/about_pic.png"}
                  alt="Profile"
                  width={320}
                  height={320}
                  className="rounded-full object-cover w-[9rem] md:w-[12rem] h-[9rem] md:h-[12rem] border-4 border-[#1b1f24]"
                />
              </div>
            </div>
          </div>
          </div>
          <div className="w-full max-w-[95%] md:max-w-[60%] m-auto my-5 md:my-10">
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
