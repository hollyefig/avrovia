import React, { useRef } from "react";
import "./nav.css";

export default function Nav({
  headerVisible,
  aboutVisible,
  castVisible,
  theme,
  setTheme,
}) {
  const navRef = useRef(null);

  // fade in nav
  setTimeout(() => {
    navRef.current.style.opacity = 1;
  }, 1500);

  const buttonSwitch = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div
      className={`navWrapper ${headerVisible ? null : "navBgColor"}`}
      ref={navRef}
    >
      <div className={`navLogoWrapper ${headerVisible ? null : "navLogoDrop"}`}>
        <div className='navLogo'></div>
        <div className='navTitle'>A D&D Podcast</div>
      </div>
      <div className={`navAbout ${aboutVisible ? "active" : null}`}>About</div>
      <div className={`navCast ${castVisible ? "active" : null}`}>Cast</div>
      <div className='navMusic'>Music</div>
      <div className='themeSwitchWrapper'>
        <div className='themeSwitch' onClick={buttonSwitch}>
          <span class='material-symbols-outlined'>light_mode</span>
          <span class='material-symbols-outlined'>dark_mode</span>
          <div
            className={`themeButton ${
              theme === "light" ? "themeButtonSwitch" : null
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
