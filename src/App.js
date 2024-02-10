import React from "react";
import Header from "./components/header/Header";
import Sect1 from "./components/sect1/Sect1";
import Sect2 from "./components/sect2/Sect2";
import Sect3 from "./components/sect3/Sect3";
import Sect4 from "./components/sect4/Sect4";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
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
