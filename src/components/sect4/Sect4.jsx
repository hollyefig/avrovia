import React, { useRef, useState, useEffect, useCallback } from "react";
import "./sect4.css";
import { data } from "../../data.js";
import gsap from "gsap";

const useResize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);
};

const useKeydown = (callback) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      callback(e);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
};

export default function Sect4() {
  // ? refs
  const navHighlight = useRef(null);
  const list = useRef(null);

  // ? session data
  const seshData = data.sessions;
  const recent = {
    info: seshData[seshData.length - 1],
    index: seshData.length,
  };
  const [latest, setLatest] = useState(recent);

  const sessions = seshData.slice();
  sessions.reverse();

  // ? get tab key names, tab width state
  const tabs = Object.keys(latest.info.tabs);
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

  // ! get session
  const getSession = (e, index) => {
    setLatest({ info: e, index: index });
  };

  // & gala stuff

  const galaArr = latest.info.tabs.gallery;

  const [galaImg, setGalaImg] = useState(null);
  // ! view gala
  const viewGala = (e, index) => {
    gsap.set(".blackOverlay", { display: "flex" });
    gsap.set("body", { overflow: "hidden" });

    setGalaImg({ img: e, index: index });
    index === 0 && gsap.set(".moveRight", { opacity: 0.3 });
    index === galaArr.length - 1 && gsap.set(".moveLeft", { opacity: 0.3 });
  };

  // ! shift gala
  const galaShift = useCallback(
    (e) => {
      if (e === "right") {
        gsap.set(".moveLeft", { opacity: 1 });
        if (galaImg.index !== galaArr.length - 1) {
          // ~ animation
          gsap
            .timeline({ defaults: { duration: 0.3 } })
            .to(".galaImgEl", { opacity: 0 })
            .to(".galaImgEl", { x: -20 }, "<")
            .add(() =>
              setGalaImg({
                img: galaArr[galaImg.index + 1],
                index: galaImg.index + 1,
              })
            )
            .to(".galaImgEl", { x: 40 }, "<")
            .to(".galaImgEl", { x: 20 })
            .to(".galaImgEl", { opacity: 1 }, "<");
        }

        galaImg.index === galaArr.length - 2 &&
          gsap.set(".moveRight", { opacity: 0.3 });
      } else if (e === "left") {
        if (galaImg.index !== 0) {
          gsap.set(".moveRight", { opacity: 1 });
          // ~ animation
          gsap
            .timeline({ defaults: { duration: 0.3 } })
            .to(".galaImgEl", { opacity: 0 })
            .to(".galaImgEl", { x: 20 }, "<")
            .add(() =>
              setGalaImg({
                img: galaArr[galaImg.index - 1],
                index: galaImg.index - 1,
              })
            )
            .to(".galaImgEl", { x: -40 }, "<")
            .to(".galaImgEl", { x: -20 })
            .to(".galaImgEl", { opacity: 1 }, "<");

          if (galaImg.index === 1) {
            gsap.set(".moveLeft", { opacity: 0.3 });
          }
        }
      }
    },
    [galaArr, galaImg]
  );

  // ! close gala
  const closeGala = () => {
    gsap.set(".blackOverlay", { display: "none" });
    gsap.set("body", { overflow: "auto" });
  };

  // & handlers for useEffect
  const handleResize = () => {
    const hWidth = getComputedStyle(list.current.children[0]).width;
    setHighlightWidth(hWidth);
    const cWidth = getComputedStyle(carouselRef.current).width;
    setCarouselWidth(cWidth);
  };

  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      closeGala();
    } else if (e.key === "ArrowRight") {
      galaImg && galaShift("right");
    } else if (e.key === "ArrowLeft") {
      galaImg && galaShift("left");
    }
  };

  // Resize and keydown event listeners
  useResize(handleResize);
  useKeydown(handleKeydown);

  // * useEffect
  useEffect(() => {
    // Initialize dimensions on mount
    handleResize();

    return () => {};
  }, []);

  return (
    <div className='floralBgWrap'>
      <div className='floralBg'></div>
      <div className='sect4Wrap'>
        <div className='sect4Content copyFont'>
          <div className='sect4Left'>
            {/* session number, date */}
            <div className='seshNum brown'>
              {/* latest session node  */}
              {latest.index === seshData.length && (
                <div className='countdownWrap copyDefault'>
                  <span className='countdownCopy'>
                    <span>Latest Session</span>{" "}
                  </span>
                </div>
              )}
              <span>session {latest.index}</span>
              <span>|</span>
              <span className='activeDate'>
                {dates[seshData.length - latest.index].date}
              </span>
            </div>
            {/* session name */}
            <div className='seshName uppercase brown'>{latest.info.name}</div>

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
                    {latest.info.tabs.summary}
                  </pre>
                </div>
                {/* video  */}
                <div className='seshVideo'>
                  {latest.info.tabs.video ? (
                    <iframe
                      src={latest.info.tabs.video}
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                      allowFullScreen
                      className='videoEmbed'
                    ></iframe>
                  ) : (
                    <div className='noVid'>No video for this session</div>
                  )}
                </div>
                {/* gallery */}
                <div className='seshGallery'>
                  {latest.info.tabs.gallery.map((e, index) => (
                    <img
                      src={e}
                      alt={index}
                      key={index}
                      id={`gala${index}`}
                      onClick={() => viewGala(e, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* sect 4 right side */}
          <div className='sect4Right'>
            {sessions.map((e, index) => {
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
                  <div
                    className='prevSeshLink uppercase'
                    onClick={() => getSession(e, sessions.length - index)}
                  >
                    view session
                  </div>
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
      <div className='blackOverlay'>
        <div className='blackOverlayInner'>
          <div className='white moveLeft' onClick={() => galaShift("left")}>
            <span className='material-symbols-outlined'>arrow_back</span>
          </div>
          <div className='overlayText white galaImg'>
            <div className='imgLeft' onClick={() => galaShift("left")}></div>
            <img src={galaImg && galaImg.img} alt='' className='galaImgEl' />
            <div className='imgRight' onClick={() => galaShift("right")}></div>
          </div>
          <div className='white closeGala' onClick={() => closeGala()}>
            <span className='material-symbols-outlined'>cancel</span>
          </div>
          <div className='white moveRight' onClick={() => galaShift("right")}>
            <span className='material-symbols-outlined'>arrow_forward</span>
          </div>
        </div>
      </div>
      <div className='spacerFooter'></div>
    </div>
  );
}
