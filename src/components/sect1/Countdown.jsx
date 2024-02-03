import React, { useState, useEffect } from "react";

export default function Countdown() {
  const calculateCountdown = () => {
    const currentDate = new Date();
    let currentDay = currentDate.getUTCDay();
    let daysUntilMonday = (1 + (7 - currentDay)) % 7;
    const countdownDate = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate() + daysUntilMonday,
      15,
      0,
      0,
      0
    );
    const timeDifference = countdownDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run the effect once when the component mounts

  return (
    <>{`${countdown.days} days, ${countdown.hours} hrs, ${countdown.minutes} m, ${countdown.seconds} s`}</>
  );
}
