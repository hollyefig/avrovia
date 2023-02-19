import React from "react";

export default function Castcard({ cast, castVisible, castContainerOut }) {
  return (
    <div
      className={`castCard ${castVisible && "castCardFadeIn"}`}
      style={{ transitionDelay: cast.timer }}
      onClick={() => castContainerOut(cast)}
    >
      <img src={cast.art} alt={cast.name} />
      <div className='castName'>{cast.name}</div>
    </div>
  );
}
