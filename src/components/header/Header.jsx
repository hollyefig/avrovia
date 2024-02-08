import React, { useRef, useEffect } from "react";
import "./header.css";

export default function Header() {
  const titleRef = useRef(null);

  useEffect(() => {
    const onScroll = (e) => {
      const scrollTarget = e.target.scrollingElement.scrollTop;
      titleRef.current !== null && scrollTarget >= 390
        ? (titleRef.current.style.opacity = 0)
        : (titleRef.current.style.opacity = 1);
    };
    window.addEventListener("scroll", (e) => onScroll(e));

    return () => {
      window.removeEventListener("scroll", (e) => onScroll(e));
    };
  }, []);

  return (
    <>
      <div className='headerPlaceholder'></div>
      <div className='headerWrap'>
        <div className='titleWrap' ref={titleRef}></div>
        <div className='headerFront'></div>
        <div className='subheadWrap'>
          <div className='headerSpacer'></div>
          <div className='subhead'>a DnD Podcast</div>
        </div>
      </div>
    </>
  );
}
