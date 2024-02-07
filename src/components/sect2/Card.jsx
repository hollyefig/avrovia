import React, { useRef } from "react";
import gsap from "gsap";

const sanitizeId = (str) => {
  return str.replace(/\s+/g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
};

export default function Card({ img, alt, openCard, data }) {
  const directionRef = useRef(null);

  const mouseEnter = (e) => {
    console.log("enter", e.target.id);
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });
  };
  const mouseLeave = (e) => {
    console.log("leave", e.target.id);
    gsap.to(e.target, { scale: 1, duration: 0.3 });
  };

  return (
    <div
      className={`card ${data.name}`}
      onClick={() => openCard(data)}
      ref={directionRef}
      onMouseEnter={(e) => mouseEnter(e)}
      onMouseLeave={(e) => mouseLeave(e)}
    >
      <img src={img} alt={alt} id={sanitizeId(data.name)} />
    </div>
  );
}
