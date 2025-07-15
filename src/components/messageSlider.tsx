'use client'

import { useState } from 'react'

type Message = {
  name: string
  message: string
  createdAt: string
}

type MessageSliderProps = {
  messages: Message[]
}

function getTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)

  const units: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'seconds'],
    [60, 'minutes'],
    [24, 'hours'],
    [30, 'days'],
    [12, 'months'],
    [Infinity, 'years'],
  ]

  let value = diff
  let unit: Intl.RelativeTimeFormatUnit = 'seconds'

  for (let i = 0; i < units.length; i++) {
    if (value < units[i][0]) break
    value = Math.floor(value / units[i][0])
    unit = units[i][1]
  }

  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-value, unit)
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
            className="w-[5%] md:w-[8%] bg-[#d5bea2] rounded-xl shadow-md px-4 py-3 text-center flex-shrink-0"
          >
            <p className="text-xs text-black text-left">{getTimeAgo(msg.createdAt)}</p>
            <p className="text-sm mt-2 text-gray-700">— {msg.name}</p>
            <p className="italic text-black">&quot;{msg.message}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  )
}
