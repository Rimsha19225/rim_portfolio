'use client'

import { useState } from 'react'

type Message = {
  _id: string
  name: string
  message: string
  createdAt: string
}

type MessageSliderProps = {
  messages: Message[]
}

export default function MessageSlider({ messages }: MessageSliderProps) {
  const [isPaused, setIsPaused] = useState(false)
  const allMessages = [...messages, ...messages] 


  return (
    <div
      className="overflow-hidden w-full bg-white/20 border-t border-b border-black py-6 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`${isPaused ? 'marquee-paused' : ''} marquee gap-4`}>
        {allMessages.map((msg, idx) => (
          <div
            key={idx}
            className="w-[10%] md:w-[15%] bg-white/20 rounded-xl shadow-md px-4 py-3 text-center flex-shrink-0"
          >
            <p className="text-xs text-black text-left">{new Date(msg.createdAt).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short',})}</p>
            <p className="text-[1.2rem] mt-2 text-[#353535] font-semibold">{msg.name}</p>
            <p className="italic text-white text-left">&quot;{msg.message}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  )
}
