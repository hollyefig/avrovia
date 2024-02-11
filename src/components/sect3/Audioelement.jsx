import React, { useEffect, useState } from "react";

export default function Audioelement({ track }) {
  const [song, setSong] = useState(null);

  useEffect(() => {
    track !== undefined && setSong(track.mp3);
    const audio = new Audio();
    audio.src = song;

    const getMetaData = () => {
      const duration = audio.duration;
      //   console.log("get meta", duration);
    };

    audio.addEventListener("loadedmetadata", getMetaData());

    return () => {
      audio.removeEventListener("loadedmetadata", getMetaData());
    };
  }, [song, track]);

  return (
    <div>
      <audio controls autoPlay src={track && track.mp3}></audio>
    </div>
  );
}
