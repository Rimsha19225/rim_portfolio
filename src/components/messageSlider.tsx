'use client'
import { client } from '../sanity/lib/client'

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

  const handleDelete = async (id: string) => {
  if (!id) {
    console.error("No ID provided to delete")
    return
  }

  try {
    console.log("Deleting document with ID:", id)
    await client.delete(id)
    alert("Message deleted successfully")
    // Optional: Refresh state
  } catch (err) {
    console.error("Sanity deletion error:", err)
    alert("Failed to delete message")
  }
}

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
            className="w-[10%] md:w-[15%] bg-[#d5bea2] rounded-xl shadow-md px-4 py-3 text-center flex-shrink-0"
          >
            <p className="text-xs text-black text-left">{new Date(msg.createdAt).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short',})}</p>
            <p className="text-[1.2rem] mt-2 text-[#353535] font-semibold">{msg.name}</p>
            <p className="italic text-black text-left">&quot;{msg.message}&quot;</p>
            <button onClick={() => handleDelete(msg._id)} className="text-red-600 mt-2 text-sm">delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
