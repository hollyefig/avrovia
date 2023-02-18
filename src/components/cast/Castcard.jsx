import React from "react";

export default function Castcard({ cast, castVisible }) {
  console.log("cast.timer", cast.timer);
  return (
    <div
      className={`castCard ${castVisible ? "castCardFadeIn" : null}`}
      style={{ transitionDelay: cast.timer }}
    >
      <img src={cast.art} alt={cast.name} />
      <div className='castName'>{cast.name}</div>
    </div>
  );
}
