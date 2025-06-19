"use client"
import { useEffect, useState } from "react";

const Timer = ({ targetDate="2025-07-01T00:00:00" }={}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="inline-flex gap-6 px-3 py-[6px] font-bold text-center text-pink-600 bg-white rounded-full shadow-md w-fit">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <TimeUnit value={timeLeft.minutes} label="MIN" />
      <TimeUnit value={timeLeft.seconds} label="SEC" />
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="text-[#FF1A58] flex gap-1">
    <div className="text-base font-[900]">{value}</div>
    <div className="text-[8px] font-medium tracking-widest flex flex-col justify-end pb-1">
      <p>{label}</p>
    </div>
  </div>
);

export default Timer;
