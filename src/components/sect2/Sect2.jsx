import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { data } from "../../data";
import "./sect2.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Sect2() {
  // ? character
  const cast = data.cast;
  const [char, setChar] = useState(null);
  const gridRef = useRef(null);

  const cardWrapRef = useRef(null);

  // ! open a card
  const openCard = (e) => {
    setChar(e);
    gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
      .to(window, {
        scrollTo: { y: ".sect2Wrap" },
      })
      .to(".charDisplay", { height: "auto" }, "<.3")
      .to(".charGrid", { opacity: 1 });
  };

  const closeCard = () => {
    console.log("close");
    gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
      .to(".charGrid", { opacity: 0 })
      .to(".charDisplay", { height: "0px" });
  };

  // * useEffect
  useEffect(() => {
    // ? close by esc
    const keypress = (e) => {
      if (e.key === "Escape") {
        gsap
          .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
          .to(".charGrid", { opacity: 0 })
          .to(".charDisplay", { height: "0px" });
      }
    };

    // ? scrollTrigger batch
    ScrollTrigger.batch(cardWrapRef.current, {
      interval: 0.5,
      start: "20% 75%",
      batchMax: 6,
      // markers: true,
      onEnter: (batch) => {
        gsap.to(".card", {
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.25,
        });
      },
      // onEnterBack: (batch) => console.log(batch),
    });

    document.addEventListener("keydown", (e) => keypress(e));

    return () => {
      document.removeEventListener("keydown", (e) => keypress(e));
    };
  }, []);

  return (
    <div className='sect2Wrap'>
      <div className='charDisplay'>
        <div className='charGrid' ref={gridRef}>
          <div className='charCopyWrap'>
            {char && (
              <div className='charCopy'>
                <span className='charSpecs'>
                  <p className='darkPink displayFont displayMedium uppercase charName'>
                    {char.name}
                  </p>
                  <span>
                    <p className='green uppercase displayFont displaySmall charRace'>
                      {char.race}
                    </p>
                    <p className='green uppercase displayFont displaySmall charClass'>
                      {char.class}
                    </p>
                    <p className='green uppercase displayFont displaySmall charAlign'>
                      {char.alignment}
                    </p>
                  </span>
                </span>
                <div className='charDesc copyDefault green'>{char.about}</div>
                <div className='playerNotes copyFont green'>
                  <p className='fontBold'>Player’s Notes</p>
                  <p>{char.playersNotes}</p>
                </div>
                <div
                  className='closeCard white copyDefault'
                  onClick={closeCard}
                >
                  X
                </div>
              </div>
            )}
          </div>
          {char && (
            <div
              className='charPhoto'
              style={{ backgroundImage: `url(${char.art})` }}
            ></div>
          )}
        </div>
      </div>
      {/* end char display  */}
      <div className='charCardsWrap' ref={cardWrapRef}>
        {cast.map((e, index) => (
          <Card
            img={cast[index].card}
            alt={`the ${e.class}`}
            key={e.name}
            openCard={openCard}
            data={e}
          />
        ))}
      </div>
    </div>
  );
}
