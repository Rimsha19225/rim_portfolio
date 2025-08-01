'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type SkillCircleProps = {
  icon: ReactNode
  percentage: number
  color?: string
}

export default function SkillCircle({ icon, percentage, color = '#fff' }: SkillCircleProps) {
  const radius = 50
  const stroke = 10
  const normalizedRadius = radius - stroke * 0.8
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.7 })

  return (
    <div className="flex flex-col items-center justify-center relative w-[130px] h-[150px]">
      <svg height={radius * 2} width={radius * 2} className="z-0">
        <circle
          stroke="#000"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          ref={ref}
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: isInView ? strokeDashoffset : circumference,
          }}
          transition={{ duration: 1.2 }}
        />
      </svg>

      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[100px] h-[100px]">
        <div className="text-2xl text-[#fff]">{icon}</div>
      </div>

      <div className="mt-2 text-sm font-semibold text-[#fff]">{percentage}%</div>
    </div>
  )
}
