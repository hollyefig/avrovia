import React, { useRef } from "react";
import "./header.css";
import avroviaTitle from "../../assets/images/avroviaTitle.png";

export default function Header() {
  const titleRef = useRef(null);

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
