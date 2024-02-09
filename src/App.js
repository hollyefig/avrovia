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
      .to(".sect1Wrap > *", { y: -20, opacity: 1, stagger: 0.2, delay: 2.5 });
  };

  // * useEffect
  useEffect(() => {
    // on load, start animation
    const onLoad = (e) => {
      startAni();
    };

    window.addEventListener("load", (e) => onLoad(e));

    return () => {
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
