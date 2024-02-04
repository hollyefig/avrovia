import React, { useState } from "react";
import gsap from "gsap";
import { data } from "../../data";
import "./sect2.css";

export default function Sect2() {
  const cast = data.cast;

  const [char, setChar] = useState(null);

  const openCard = (e) => {
    char &&
      gsap
        .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
        .to(".charDisplay", { height: "auto" })
        .from(".charGrid", { opacity: 0 });
    setChar(e);
  };

  return (
    <div className='sect2Wrap'>
      <span className='green uppercase displayLarge largeSubhead'>Cast</span>
      <div className='charDisplay'>
        {char && (
          <div className='charGrid'>
            <div className='charCopyWrap'>
              <div className='charCopy'>
                <span className='charSpecs'>
                  <p className='pink displayFont displayMedium uppercase charName'>
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
              </div>
            </div>
            <div
              className='charPhoto'
              style={{ backgroundImage: `url(${char.art})` }}
            ></div>
          </div>
        )}
      </div>
      {/* end char display  */}
      <div className='charCardsWrap'>
        {cast.map((e, index) => (
          <img
            src={cast[index].card}
            alt={`the ${e.class}`}
            key={e.name}
            onClick={() => openCard(e)}
          />
        ))}
      </div>
    </div>
  );
}
