import React, { useRef, useState } from "react";
import "./nav.css";

export default function Nav({
  headerVisible,
  aboutVisible,
  castVisible,
  aboutRef,
  castRef,
  mobile,
}) {
  const navRef = useRef(null);

  // fade in nav

  // dropdown settings
  const [dropDown, setDropDown] = useState(false);
  const navDropdown = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };

  // scrolls
  const clickAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setDropDown(false);
  };
  const clickCast = () => {
    castRef.current?.scrollIntoView({ behavior: "smooth" });
    setDropDown(false);
  };
  return (
    <div
      className={`navWrapper ${!headerVisible && "navBgColor"}`}
      ref={navRef}
    >
      <div
        className={`navLogoWrapper ${!headerVisible && "navLogoDrop"}`}
        onClick={mobile ? navDropdown : undefined}
      >
        <div className='navLogo'></div>
        <div className='navTitle'>A D&D Podcast</div>
      </div>
      <div className={`navDropdown ${dropDown && "navDropdownClick"}`}>
        <div
          className={`navAbout ${aboutVisible && "active"}`}
          onClick={clickAbout}
        >
          About
        </div>
        <div
          className={`navCast ${castVisible && "active"}`}
          onClick={clickCast}
        >
          Cast
        </div>
        <div className='navMusic'>Music</div>
      </div>
      <div className='themeSwitchWrapper'>
        <div className='themeSwitch'>
          <span class='material-symbols-outlined'>light_mode</span>
          <span class='material-symbols-outlined'>dark_mode</span>
          <div className='themeButton'></div>
        </div>
      </div>
    </div>
  );
}
