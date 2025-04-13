
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="text-center">
        <div className="bg-festival-maroon text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px]">
          {formatNumber(timeLeft.days)}
        </div>
        <span className="text-sm mt-1 block">Days</span>
      </div>
      <div className="text-center">
        <div className="bg-festival-red text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px]">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-sm mt-1 block">Hours</span>
      </div>
      <div className="text-center">
        <div className="bg-festival-saffron text-white text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-sm mt-1 block">Minutes</span>
      </div>
      <div className="text-center">
        <div className="bg-festival-golden text-festival-maroon text-2xl md:text-3xl font-bold rounded-lg p-3 min-w-[70px]">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-sm mt-1 block">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
