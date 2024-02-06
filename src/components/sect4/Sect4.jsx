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

  const sessions = seshData.slice(0, -1);
  sessions.reverse();

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
        <div className='displayFont uppercase displayLarge green sect4Header'>
          Sessions
        </div>
        <div className='sect4Content copyFont'>
          <div className='sect4Left'>
            {/* latest session node  */}
            <div className='countdownWrap copyDefault'>
              <span className='countdownCopy'>
                <span className='fontBold'>Latest |</span> (date format)
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
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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
            {sessions.map((e, index) => (
              <div className='prevSesh' key={e.name}>
                <div className='prevSeshNum'>{sessions.length - index}</div>
                <div className='prevSeshDate'>(date)</div>
                <div className='prevSeshName uppercase fontBlack'>{e.name}</div>
                <div className='prevSeshSum'>summary</div>
                <div className='prevSeshLink uppercase'>view session</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
