import React, { useRef, useEffect } from "react";
import "./header.css";
import avroviaTitle from "../../assets/images/avroviaTitle.png";

export default function Header() {
  const titleRef = useRef(null);

  useEffect(() => {
    const onScroll = (e) => {
      console.log("scroll", e.target.scrollingElement.scrollTop);
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
    <div className='headerWrap'>
      <div className='titleWrap'>
        <img src={avroviaTitle} alt='' ref={titleRef} />
      </div>
      <div className='headerFront'></div>
      <div className='subheadWrap'>
        <div className='headerSpacer'></div>
        <div className='subhead'>a DnD Podcast</div>
      </div>
    </div>
  );
}
