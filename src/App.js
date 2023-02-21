import React, { useState, useRef, useEffect } from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Cast from "./components/cast/Cast";

function App() {
  const headerRef = useRef(null),
    [headerVisible, setHeaderVisible] = useState(true),
    aboutRef = useRef(null),
    [aboutVisible, setAboutVisible] = useState(false),
    castRef = useRef(null),
    [castVisible, setCastVisible] = useState(false);

  // theme setting

  const callBackFunc = (ent) => {
    if (ent[0].target.id === "headerWrapper") {
      setHeaderVisible(ent[0].isIntersecting);
    } else if (ent[0].target.id === "aboutWrapper") {
      setAboutVisible(ent[0].isIntersecting);
    } else if (ent[0].target.id === "castWrapper") {
      setCastVisible(ent[0].isIntersecting);
    }
  };

  const [mobile, setMobile] = useState(false);

  // scroll
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });
    const header = headerRef.current,
      about = aboutRef.current,
      cast = castRef.current;
    if (headerRef.current) observer.observe(headerRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (castRef.current) observer.observe(castRef.current);

    const resize = () => {
      if (window.outerWidth <= 930) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", () => resize());
    if (window.outerWidth <= 930) {
      setMobile(true);
    }
    return () => {
      if (header) observer.unobserve(header);
      if (about) observer.unobserve(about);
      if (cast) observer.unobserve(cast);

      window.removeEventListener("resize", () => resize());
      if (window.outerWidth >= 930) {
        setMobile(false);
      }
    };
  }, [headerRef, aboutRef, castRef, mobile]);

  return (
    <div className='App dark'>
      <Nav
        headerVisible={headerVisible}
        aboutVisible={aboutVisible}
        castVisible={castVisible}
        aboutRef={aboutRef}
        castRef={castRef}
        mobile={mobile}
      />
      <div className='sections'>
        <Header headerRef={headerRef} headerVisible={headerVisible} />
        <About aboutRef={aboutRef} aboutVisible={aboutVisible} />
        <Cast castRef={castRef} castVisible={castVisible} />
      </div>
    </div>
  );
}

export default App;
