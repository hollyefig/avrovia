import React from "react";
import "./header.css";

export default function Header({ headerRef, headerVisible }) {
  return (
    <div
      className='headerWrapper scrollSnap'
      id='headerWrapper'
      ref={headerRef}
    >
      <div className='backdropFilter'>
        <div
          className={`logoWrapper ${
            headerVisible ? "logoWrapperFadeIn" : null
          }`}
        >
          <div className='logo'></div>
          <div
            className={`headerTitle ${
              headerVisible ? "headerTitleFadeIn" : null
            }`}
          >
            A D&D Podcast
          </div>
        </div>
      </div>
    </div>
  );
}
