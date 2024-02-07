import React, { useRef, useState, useEffect } from "react";
import "./sect4.css";
import { data } from "../../data.js";
import gsap from "gsap";

export default function Sect4() {
  // ? refs
  const navHighlight = useRef(null);
  const list = useRef(null);

  // ? session data
  const seshData = data.sessions;
  const latest = seshData[seshData.length - 1];

  const sessions = seshData.slice();
  sessions.reverse();

  console.log();

  // ? get tab key names, tab width state
  const tabs = Object.keys(latest.tabs);
  const [highlightWidth, setHighlightWidth] = useState();
  // ? carousel
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState();

  // ! tab selection
  const selectTab = (e) => {
    gsap.defaults({ ease: "power2.out", duration: 0.5 });
    gsap.to(".navHighlight", { left: parseInt(highlightWidth) * e });
    gsap.to(".seshCarousel", { right: parseInt(carouselWidth) * e });
  };

  // ! get previous mondays
  function getPrevMonday() {
    const previousMondayDates = [];

    // Get the current date
    const currentDate = new Date();

    // Loop through the last 16 weeks
    for (let i = 0; i < sessions.length; i++) {
      // Calculate the date for the current iteration
      const previousMonday = new Date(currentDate);
      previousMonday.setDate(
        currentDate.getDate() - currentDate.getDay() + (i === 0 ? 0 : -7 * i)
      );

      // Calculate the difference in weeks, months, and years
      const timePassed = {
        weeks: Math.floor(
          (currentDate - previousMonday) / (7 * 24 * 60 * 60 * 1000)
        ),
        months:
          currentDate.getMonth() -
          previousMonday.getMonth() +
          12 * (currentDate.getFullYear() - previousMonday.getFullYear()),
        years: currentDate.getFullYear() - previousMonday.getFullYear(),
      };

      // Add the date and time difference to the array
      previousMondayDates.push({
        date: previousMonday.toISOString().split("T")[0],
        timePassed,
      });
    }

    return previousMondayDates;
  }

  const dates = getPrevMonday();

  // * useEffect
  useEffect(() => {
    // adjust width for highligher in nav when resize
    const getWidth = () => {
      const hWidth = getComputedStyle(list.current.children[0]).width;
      setHighlightWidth(hWidth);
      const cWidth = getComputedStyle(carouselRef.current).width;
      setCarouselWidth(cWidth);
    };
    const hWidth = getComputedStyle(list.current.children[0]).width;
    setHighlightWidth(hWidth);
    const cWidth = getComputedStyle(carouselRef.current).width;
    setCarouselWidth(cWidth);

    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [list, setHighlightWidth]);

  return (
    <div className='floralBgWrap'>
      <div className='floralBg'></div>
      <div className='sect4Wrap'>
        <div className='sect4Content copyFont'>
          <div className='sect4Left'>
            {/* latest session node  */}
            <div className='countdownWrap copyDefault'>
              <span className='countdownCopy'>
                <span className='fontBold'>Latest Session |</span>{" "}
                {dates[0].date}
              </span>
            </div>
            {/* session number */}
            <div className='seshNum uppercase brown'>
              session {seshData.length}
            </div>
            {/* session name */}
            <div className='seshName uppercase brown'>{latest.name}</div>
            {/* nav  */}
            <div className='sect4NavWrap'>
              <div
                className='navHighlight'
                ref={navHighlight}
                style={{ width: highlightWidth }}
              ></div>
              <ul className='uppercase' ref={list}>
                {tabs.map((e, index) => (
                  <li onClick={() => selectTab(index)} key={e}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className='seshCarouselFrame'>
              <div className='seshCarousel' ref={carouselRef}>
                <div className='seshSummary'>
                  <pre
                    className='copyDefault'
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {latest.tabs.summary}
                  </pre>
                </div>
                <div className='seshVideo'>
                  <iframe
                    src={latest.tabs.video}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                    allowFullScreen
                    className='videoEmbed'
                  ></iframe>
                </div>
                <div className='seshGallery'>{latest.tabs.gallery}</div>
              </div>
            </div>
          </div>
          {/* sect 4 right side */}
          <div className='sect4Right'>
            {sessions.map((e, index) => {
              // Skip the first item
              if (index === 0) {
                return null; // Skip rendering for the first item
              }

              let pastTime;

              if (dates[index].timePassed.weeks <= 2) {
                pastTime = `${dates[index].timePassed.weeks}w`;
              } else if (dates[index].timePassed.weeks === 3) {
                pastTime = `3w`;
              } else if (dates[index].timePassed.weeks > 2) {
                pastTime = `${Math.floor(dates[index].timePassed.weeks / 4)}m`;
              }

              return (
                <div className='prevSesh' key={e.name}>
                  <div className='prevSeshNum'>{sessions.length - index}</div>
                  <div className='prevSeshDate'>
                    {pastTime} | {dates[index].date}
                  </div>
                  <div className='prevSeshName uppercase fontBlack'>
                    {e.name}
                  </div>
                  <div className='prevSeshSum'>
                    {e.tabs.summary.slice(0, 90)}...
                  </div>
                  <div className='prevSeshLink uppercase'>view session</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* end sect4 wrap */}
      </div>
      <div className='footerWrap'>
        <div className='footerContent'>
          <span className='uppercase displayFont displayLarge white'>
            special thanks
          </span>
          <div className='footerGrid copyDefault white'>
            <div className='karaThanks'>
              <p className='fontBold'>Karawek</p>
              <p>
                <em>Campaign DM | Artist</em>
              </p>
              <div className='thanksSocials'>
                <span>Twitter</span> | <span>Discord</span> |{" "}
                <span>Instagram</span>
              </div>
            </div>
            <div className='zebbyThanks'>
              <p className='fontBold'>Zebby</p>
              <p>
                <em>Musician | Visual Media</em>
              </p>
              <div className='thanksSocials'>
                <span>Twitter</span> | <span>Discord</span> |{" "}
                <span>SoundCloud</span>
              </div>
            </div>
            <div className='hollyThanks'>
              <p className='fontBold'>Holly Fig</p>
              <p>
                <em>Developer | Artist</em>
              </p>
              <div className='thanksSocials'>
                <span>Instagram</span> | <span>Discord</span> |{" "}
                <span>GitHub</span>
              </div>
            </div>
            <div className='thankYou fontBold'>...& all the great players!</div>
          </div>
        </div>
        {/* end footer */}
      </div>
      <div className='spacerFooter'></div>
    </div>
  );
}
