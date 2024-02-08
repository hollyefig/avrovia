import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sect1 from "./components/sect1/Sect1";
import Sect2 from "./components/sect2/Sect2";
import Sect3 from "./components/sect3/Sect3";
import Sect4 from "./components/sect4/Sect4";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const startAni = (e) => {
    gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2.inOut" } })
      .set(window, { scrollTo: { y: 0 } })
      .to("body", { overflow: "hidden" })
      .to(".headerWrap, .headerFront", { height: e.bgHeight, delay: 2 })
      .to(".titleWrap", { top: e.titleTop }, "<")
      .to(".sect1Wrap > *", { y: -20, opacity: 1, stagger: 0.2 })
      .to("body", { overflow: "scroll" });
  };

  // * useEffect
  useEffect(() => {
    const mobile = [
      { bgHeight: 390, titleTop: 135 },
      { bgHeight: 470, titleTop: -15 },
    ];

    const windowResize = (e) => {
      // is mobile
      if (e.target.outerWidth <= 768) {
        gsap.set(".titleWrap", { top: -15 });
      }
      // is desktop
      else {
        gsap.set(".titleWrap", { top: 135 });
      }
    };

    // on load, start animation
    const onLoad = (e) => {
      // if mobile
      if (e.currentTarget.outerWidth <= 768) {
        startAni(mobile[1]);
      }
      // if desktop
      else if (e.currentTarget.outerWidth > 768) {
        startAni(mobile[0]);
      }
    };

    window.addEventListener("resize", (e) => windowResize(e));
    window.addEventListener("load", (e) => onLoad(e));

    return () => {
      window.removeEventListener("resize", (e) => windowResize(e));
      window.removeEventListener("load", (e) => onLoad(e));
    };
  }, []);

  return (
    <div className='App'>
      <Header />
      <Sect1 />
      <Sect2 />
      <Sect3 />
      <Sect4 />
    </div>
  );
}

export default App;
