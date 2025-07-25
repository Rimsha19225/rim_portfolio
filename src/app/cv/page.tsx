import React from 'react'
import Navbar from '@/components/navbar'

const Cv = () => {
  return (
    <div className="min-h-screen bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black overflow-x-hidden w-full h-full">
      <Navbar />
      <div className="flex justify-center items-center h-auto">
        <div className="flex w-full gap-4 px-6 justify-between items-center max-w-[100%] md:max-w-[40%]">
            <iframe
                src="/docs/Rimsha Resume.pdf"
                className="w-full h-[60vh] my-16"
                title="PDF Viewer"
            />
        </div>
      </div>

    </div>
  )
}

export default Cv