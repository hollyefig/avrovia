import React, { useRef, useState, useEffect } from "react";
import "./nav.css";

export default function Nav({
  headerVisible,
  aboutVisible,
  castVisible,
  theme,
  setTheme,
}) {
  const navRef = useRef(null);
  const [mobile, setMobile] = useState(false);

  // determine mobile
  useEffect(() => {
    const resize = () => {
      if (window.outerWidth <= 930) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", () => resize());
    return () => window.removeEventListener("resize", () => resize());
  }, []);

  // fade in nav
  setTimeout(() => {
    navRef.current.style.opacity = 1;
  }, 1500);

  const [dropDown, setDropDown] = useState(false);
  const navDropdown = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };
  return (
    <div
      className={`navWrapper ${!headerVisible && "navBgColor"}`}
      ref={navRef}
      onClick={mobile && navDropdown}
    >
      <div className={`navLogoWrapper ${headerVisible ? null : "navLogoDrop"}`}>
        <div className='navLogo'></div>
        <div className='navTitle'>A D&D Podcast</div>
      </div>
      <div className={`navDropdown ${dropDown && "navDropdownClick"}`}>
        <div className={`navAbout ${aboutVisible && "active"}`}>About</div>
        <div className={`navCast ${castVisible && "active"}`}>Cast</div>
        <div className='navMusic'>Music</div>
      </div>
      <div className='themeSwitchWrapper'>
        <div className='themeSwitch'>
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
