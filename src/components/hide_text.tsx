'use client'

import { useState } from 'react'

export default function AboutText() {
  const [showMore, setShowMore] = useState(false)

  const text = `A frontend developer skilled in UI/UX design, responsive websites, logo creation, Microsoft Office, and modern tech like HTML, CSS, JavaScript, React, Next.js, and Python, currently learning Agentic AI for smarter user experiences.`

  const shortText = text.slice(0, 120)

  return (
    <p className="text-[#000] font-semibold text-[0.8rem] leading-[1.22rem] md:text-[0.9rem] pb-4 text-justify">
      {showMore ? text : shortText + '...'}
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-[#000] font-semibold ml-1 hover:text-[#fff] hover:underline underline-offset-5 transition duration-200"
      >
        {showMore ? 'See Less' : 'See More'}
      </button>
    </p>
  )
}
