"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../../components/navbar";

const projects = [
  {
    id: "ice_cream",
    name: "Ice Cream Shop",
    description: "A responsive and visually appealing web application built using Next.js, JavaScript, and Tailwind CSS. This project showcases a modern ice cream shop interface with smooth navigation, interactive UI components, and a clean, mobile-friendly layout. Designed to highlight product categories and enhance user experience with fast performance and optimized code structure.",
    image: "/image/ice_cream.png",
    link: "https://ice-cream-ten-lime.vercel.app/"
  },
  {
    id: "ice_cream_dashboard",
    name: "Ice Cream Dashboard",
    description: "A custom admin dashboard developed using Next.js, JavaScript, and Tailwind CSS to manage the Ice Cream Shop’s products and content. The dashboard features a clean UI for adding, updating, and deleting ice cream items, real-time updates, and a responsive design for seamless access across devices. Built to enhance store management efficiency with a focus on user-friendly controls and fast performance.",
    image: "/image/admin_iceCream.png",
    link: "https://admin-ice-cream-shop.vercel.app/"
  },
  {
    id: "pizza",
    name: "Pizza Shop",
    description: "A dynamic and responsive web application built using Next.js, typeScript, and Tailwind CSS to showcase a modern pizza ordering experience. The site includes an attractive UI, product listings with prices, category-based filtering, and a mobile-friendly layout. Designed for speed and usability, this project demonstrates strong frontend development skills with clean, component-based architecture.",
    image: "/image/pizza.png",
    link: "https://ice-cream-ten-lime.vercel.app/"
  },
  {
    id: "bmi_calculator",
    name: "BMI Calculator",
    description: "A simple yet effective Body Mass Index (BMI) calculator developed using Python and deployed with Streamlit. This web app allows users to input their height and weight to calculate BMI instantly, along with health category feedback (e.g., underweight, normal, overweight). The interface is clean, interactive, and responsive—ideal for learning health-based metrics through user-friendly design.",
    image: "/image/bmi_calculator.png",
    link: "https://appdashboard-3a24bshsulizmmdlozbppg.streamlit.app/"
  },
  {
    id: "resuma",
    name: "Resuma Builder",
    description: "A fully responsive and interactive Resume Builder web application built using HTML, CSS, and JavaScript, and deployed on Vercel. Users can input their personal, educational, and professional details to generate a clean, structured resume. The app features dynamic form fields, section toggling, and a real-time preview. It also includes a PDF download option, enabling users to instantly save and share their resumes — all through a simple and user-friendly interface.",
    image: "/image/resuma.png",
    link: "https://resuma-builder-one.vercel.app/"
  },
  {
    id: "password",
    name: "Password Strength Meter",
    description: "A web-based tool developed using Python and deployed with Streamlit, designed to evaluate the strength of user-entered passwords in real-time. The app analyzes various factors such as length, use of uppercase/lowercase letters, numbers, and special characters to classify password strength (e.g., weak, moderate, strong). Featuring a clean and responsive UI, this tool helps users create more secure passwords interactively.",
    image: "/image/password.png",
    link: "https://passwordstrengthmeter-c4gprjihigwpmegumwr3mt.streamlit.app/"
  },
  {
    id: "e_commerce",
    name: "E Commerce",
    description: "A modern and fully responsive e-commerce web application developed using Next.js with TypeScript, integrated with Sanity CMS for dynamic content management. The project features product listings, filtering by category, detailed product pages, and a clean shopping experience. Data is fetched through custom APIs built using Sanity’s GROQ queries. The application is deployed on Vercel, ensuring fast performance and seamless user experience across devices.",
    image: "/image/e_commerce.png",
    link: "https://shop-co-orpin.vercel.app/"
  },
  {
    id: "todo",
    name: "Todo List App",
    description: "A simple and responsive task management web application built using Next.js with TypeScript and deployed on Vercel. The app allows users to add and delete tasks in real-time with a clean, minimal UI. Designed for productivity and ease of use, it demonstrates strong component-based architecture and efficient state management in a TypeScript environment.",
    image: "/image/todo.png",
    link: "https://todo-list-indol-tau.vercel.app/"
  },
  {
    id: "countdown",
    name: "Countdown Timer",
    description: "A responsive and interactive countdown timer (stopwatch-style) web application built using Next.js with TypeScript, and deployed on Vercel. The app allows users to start, pause, and reset a countdown timer with real-time updates and smooth UI transitions. Designed with a clean interface and component-based architecture, this project demonstrates efficient state management and responsive design across all devices.",
    image: "/image/countdown.png",
    link: "https://timer-iota-flax.vercel.app/"
  },
  {
    id: "library",
    name: "Personal Library",
    description: "A user-friendly library management app developed using Python and deployed with Streamlit, designed to help users organize and track their personal book collection. The app allows users to add, remove, search, and view books, along with displaying helpful statistics about the collection. With a clean and interactive interface, this tool simplifies personal book management and demonstrates practical use of Python with Streamlit for real-world utilities.",
    image: "/image/library.png",
    link: "https://personallibrarymanager-nybthhmqkc7aw7uruf7h8d.streamlit.app/"
  },
  {
    id: "unit",
    name: "Unit Converter",
    description: "A simple and efficient unit conversion tool developed using Python and deployed with Streamlit. This web app allows users to convert between various units such as length, weight, temperature, and more. With a clean and interactive UI, it provides accurate results instantly and enhances user experience through real-time feedback. Ideal for educational or practical use, showcasing effective use of Python logic and Streamlit deployment.",
    image: "/image/unit.png",
    link: "https://unitconverter-7xelyjpecmkbxauanugdzd.streamlit.app/"
  },
  {
    id: "file",
    name: "File Converter",
    description: "A versatile file conversion tool built using Python and deployed with Streamlit, allowing users to convert files between different formats (e.g., PDF to Word, image to PDF, text to PDF, etc.). The app features a simple and responsive UI where users can upload, convert, and download files seamlessly. Designed for everyday productivity, this tool demonstrates practical use of Python libraries and interactive web deployment using Streamlit.",
    image: "/image/file.png",
    link: "https://rimsha19225-file-converter-converterfile-wnugdq.streamlit.app/"
  },
  {
    id: "country",
    name: "Country Detail",
    description: "A responsive and informative web application built using Next.js with TypeScript, styled with Tailwind CSS. This app displays detailed information about countries, including name, flag, capital, population, region, and more. Data is fetched dynamically from a public API, and the interface is designed for clarity and ease of navigation across all device sizes. A perfect blend of clean UI and efficient data handling.",
    image: "/image/country.png",
    link: "https://world-country-eta.vercel.app/"
  },
];


const ProjectCard = ({name, description, image, index, link, id}: {name: string; description: string; image: string; index: number; link: string; id: string;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animation = useAnimation();
  const isEven = index % 2 === 0;
  const pathname = usePathname();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      animation.start({
        opacity: 0,
        scale: 0.8,
        y: 40,
      });
    }
  }, [isInView, animation]);

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
    <div id={id}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={animation}
      className={`flex flex-col md:flex-row ${
        !isEven ? "md:flex-row-reverse" : ""
      } items-center gap-1 bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg`}
    >
      {/* Image */}
      <div className="w-full md:w-[45%]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-[100%] h-[12rem] md:h-[23rem] object-cover rounded-xl"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-[50%] text-center md:text-left text-black space-y-4 p-3 md:p-4">
        <h3 className="text-[1.5rem] md:text-[2.2rem] font-bold text-shadow-[0_3px_5px_#ffe4c4] leading-[2.5rem]">{name}</h3>
        <p className="text-sm md:text-base text-black md:text-[#ffe4c4] text-justify">{description}</p>
        <Link href={link} target="_blank">
          <button className={`px-4 py-2 text-[#ffe4c4] bg-black font-semibold rounded ${!isEven ? "md:hover:shadow-[0_0_15px_#000]" : ""} hover:shadow-[0_0_15px_#ffe4c4] transition`}>
            View Project
          </button>
        </Link>
      </div>
    </motion.div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black w-full pb-16 px-2 md:px-6">
        <Navbar />
      {/* Heading */}
      <h2 className="text-[2rem] md:text-[3rem] font-bold text-black mb-6 md:mb-8 text-center drop-shadow-md text-shadow-[0_3px_5px_#ffe4c4]">
        My <span className="text-[#ffe4c4] text-shadow-[0_4px_8px_#000]">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-10 max-w-[96%] md:max-w-[55rem] mx-auto">
        {projects.map((project, index) => (
            <ProjectCard
                key={index}
                index={index}
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
                id={project.id}
            />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;