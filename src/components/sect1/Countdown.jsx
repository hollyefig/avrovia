import React, { useState, useEffect } from "react";

const getNextMonday = () => {
  const currentDate = new Date();
  let currentDay = currentDate.getUTCDay();
  let daysUntilMonday = (1 + (7 - currentDay)) % 7;
  const nextMonday = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate() + daysUntilMonday,
    15,
    0,
    0,
    0
  );
  return nextMonday;
};

export default function Countdown() {
  const calculateCountdown = () => {
    const currentDate = new Date();
    const nextMonday = getNextMonday();

    // Calculate time difference until next Monday at 3pm
    let timeDifference = nextMonday - currentDate;

    // If the current time is after Monday 3pm, reset the countdown to 4 hours after Monday 3pm
    if (timeDifference < 0) {
      const newDeadline = new Date(nextMonday.getTime() + 4 * 60 * 60 * 1000);
      timeDifference = newDeadline - currentDate;
    }

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

  // ? countdown
  const [countdown, setCountdown] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  // ? determine session is live
  const [inSession, setInSession] = useState(false);

  // ? get timezone
  const timezone = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.replace("_", " ");

  // * useEffect
  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);
    setInSession(countdown.days === 0 && countdown.seconds === 0);

    return () => clearInterval(intervalId);
  }, [countdown, setInSession]);

  return (
    <>
      {countdown.days !== null ? (
        <>
          {inSession ? (
            <span className='fontBold'>Session in Progress</span>
          ) : (
            <>
              <span className='fontBold'>
                {`${countdown.days} ${countdown.days === 1 ? "day" : "days"}, ${
                  countdown.hours
                } hrs, ${countdown.minutes}
          m, ${countdown.seconds} s`}{" "}
              </span>
              <em>until next session | {timezone}</em>
            </>
          )}
        </>
      ) : (
        <>
          <em>loading countdown</em>
        </>
      )}
    </>
  );
}
