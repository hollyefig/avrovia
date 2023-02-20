import React, { useRef, useState } from "react";
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

  const [dropDown, setDropDown] = useState(false);
  const navDropdown = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
    console.log("dropdown", dropDown);
  };
  return (
    <div
      className={`navWrapper ${!headerVisible && "navBgColor"}`}
      ref={navRef}
      onClick={navDropdown}
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
