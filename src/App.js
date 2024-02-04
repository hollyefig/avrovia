import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Sect1 from "./components/sect1/Sect1";
import Sect2 from "./components/sect2/Sect2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // useEffect(() => {
  //   gsap.from(".charCardsWrap", {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".charCardsWrap",
  //       start: "top 80%", // Adjust the start position
  //       end: "bottom 20%", // Adjust the end position
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div className='App'>
      <Header />
      <Sect1 />
      <Sect2 />
    </div>
  );
}

export default App;
