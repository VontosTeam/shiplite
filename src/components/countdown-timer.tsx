"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="mt-2 flex gap-2 text-sm font-medium">
      <div className="flex flex-col items-center rounded bg-[#0033A0]/10 px-2 py-1">
        <span className="text-lg font-bold text-[#0033A0]">{timeLeft.days}</span>
        <span className="text-xs text-gray-500">Days</span>
      </div>
      <div className="flex flex-col items-center rounded bg-[#0033A0]/10 px-2 py-1">
        <span className="text-lg font-bold text-[#0033A0]">{timeLeft.hours}</span>
        <span className="text-xs text-gray-500">Hours</span>
      </div>
      <div className="flex flex-col items-center rounded bg-[#0033A0]/10 px-2 py-1">
        <span className="text-lg font-bold text-[#0033A0]">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-500">Mins</span>
      </div>
      <div className="flex flex-col items-center rounded bg-[#0033A0]/10 px-2 py-1">
        <span className="text-lg font-bold text-[#0033A0]">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-500">Secs</span>
      </div>
    </div>
  )
}

