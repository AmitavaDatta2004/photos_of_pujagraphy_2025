"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(intervalId)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString()
  }

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="text-center">
        <div className="bg-gradient-to-br from-festival-maroon to-festival-red dark:from-festival-maroon/90 dark:to-festival-red/80 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px] shadow-md">
          {formatNumber(timeLeft.days)}
        </div>
        <span className="text-sm mt-1 block dark:text-gray-200 font-medium">Days</span>
      </div>
      <div className="text-center">
        <div className="bg-gradient-to-br from-festival-red to-festival-saffron dark:from-festival-red/90 dark:to-festival-saffron/80 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px] shadow-md">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-sm mt-1 block dark:text-gray-200 font-medium">Hours</span>
      </div>
      <div className="text-center">
        <div className="bg-gradient-to-br from-festival-saffron to-festival-golden dark:from-festival-saffron/90 dark:to-festival-golden/80 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px] shadow-md">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-sm mt-1 block dark:text-gray-200 font-medium">Minutes</span>
      </div>
      <div className="text-center">
        <div className="bg-gradient-to-br from-festival-golden to-amber-400 dark:from-festival-golden/90 dark:to-amber-500/80 text-festival-maroon dark:text-gray-900 text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px] shadow-md">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-sm mt-1 block dark:text-gray-200 font-medium">Seconds</span>
      </div>
    </div>
  )
}

export default CountdownTimer
