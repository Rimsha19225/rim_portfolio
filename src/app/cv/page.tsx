import React from 'react'

const Cv = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#9C27B0] to-[#4A148C] overflow-x-hidden w-full h-full">
      <div className="flex pt-[4.5rem] md:pt-[7rem] justify-center items-center h-auto">
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