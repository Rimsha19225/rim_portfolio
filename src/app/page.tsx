import AboutText from "@/components/about_text";
import MainPageText from "@/components/mainpage"
import SkillBarText from "@/components/skillsbar_text";
import ServicesText from "@/components/services_text"
import LatestProjects from "@/components/latest_projects"
import MessageSlider from '@/components/messageSlider'
import { client } from '../sanity/lib/client'
import Link from "next/link";

async function getMessages() {
  const query = `*[_type == "message"] | order(createdAt desc)[0...10]{
    name,
    message,
    createdAt
  }`
  return await client.fetch(query)
}

export default async function Home() {
  const messages = await getMessages()

  return (
    <div className="bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden pb-10">
      <MainPageText/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto" />
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto mt-1"/>
      <SkillBarText/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto"/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto mt-1"/>
      <AboutText/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto"/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto mt-1"/>
      <ServicesText/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto"/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto mt-1"/>
      <div className="py-10 px-4 max-w-5xl mx-auto">
      {/* Project Content */}
      <h2 className="text-[2rem] md:text-[3rem] font-bold text-black mb-6 md:mb-8 text-center drop-shadow-md text-shadow-[0_3px_5px_#ffe4c4]">
        What <span className="text-[#ffe4c4] text-shadow-[0_4px_8px_#000]">People Say!
        </span>
      </h2>
      {messages.length > 0 && <MessageSlider messages={messages} />}
      <div className="flex justify-center mt-6"><Link href={"/review"}><button className="px-3 md:px-6 py-2 md:py-3 bg-[#000] rounded-xl text-[#ffe4c4] hover:shadow-[0_0_16px_#ffe4c4] text-[0.8rem] md:text-[1rem]">Drop Message</button></Link></div>
    </div>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto"/>
      <hr className="w-full max-w-[90%] md:max-w-[70%] h-[2px] border-none bg-gradient-to-l from-[#ffe4c4] to-black m-auto mt-1"/>
      <LatestProjects/>
    </div>
  );
}
