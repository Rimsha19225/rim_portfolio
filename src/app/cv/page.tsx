import React from 'react'
import Navbar from '@/components/navbar'

const Cv = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ffe4c4] to-black overflow-x-hidden w-full h-full">
      <Navbar />
      <div className="flex justify-center items-center h-auto">
        <div className="flex w-full gap-4 px-6 justify-between items-center max-w-[40%]">
            <iframe
                src="/docs/RimshaResume.pdf"
                className="w-full h-[60vh] my-16"
                title="PDF Viewer"
            />
        </div>
      </div>

    </div>
  )
}

export default Cv