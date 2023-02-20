import anya from "./castImgs/anya.PNG";
import myth from "./castImgs/myth.jpeg";
import ashar from "./castImgs/ashar.png";
import ilvaaj from "./castImgs/ilvaaj.png";

let num = 0.5;

export const castData = [
  {
    name: "Anya",
    class: "Rogue",
    race: "Elf",
    alignment: "Chaotic Good",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium cumque minima aspernatur ullam corruptivel, perspiciatis eius, debitis necessitatibus, expedita deleniti architecto sequi tempore excepturi dolore quaerat assumenda harum eveniet est dolorem illum. Minus dolorem aperiam assumenda cum beatae?`,

    playersNotes: `I really enjoy playing this character. She doesn't take life too seriously and won't mind a little mischief, but still cares deeply about her friends, and will use her talents to help them`,
    art: anya,
    artist: false,
    artistName: false,
    timer: `${num}s`,
  },
  {
    name: "Myth",
    class: "Sorcerer/Warlock",
    race: "Sea Elf",
    alignment: "Chaotic Neutral",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur laudantium cumque minima aspernatur ullam corruptivel, perspiciatis eius, debitis necessitatibus, expedita deleniti architecto sequi tempore excepturi dolore quaerat assumenda harum eveniet est dolorem illum. Minus dolorem aperiam assumenda cum beatae?`,

    playersNotes: `Player's notes`,
    art: myth,
    artist: "https://twitter.com/MadCursed",
    artistName: "MadCursed",
    timer: `${(num += 0.2)}s`,
  },
  {
    name: "Ashar",
    class: "Wizard (Chronurgy)",
    race: "Fire Genasi",
    alignment: "Neutral/Chaotic Good",
    about: `Ash is a total sweetheart and will probably act as the mom of the party. She cares about everything and everyone and if someone she cares about gets hurt she will absolutely fireball someone into next week.
    That said, she's a chaotic good wizard with a heart of gold and a bag full of necessities (like chocolate for example)! Loves books, reading, teaching and sweets~!`,

    playersNotes: `Player's notes`,
    art: ashar,
    artist: false,
    artistName: false,
    timer: `${(num += 0.2)}s`,
  },
  {
    name: "Ilvaaj",
    class: "Ranger (Horizon Walker)",
    race: "Shifter (Swiftstrider)",
    alignment: "Lawful Good",
    about: `Ilvaaj is a renown scholar and has a keen interest in technology, relics and mythology. There are a wide variety of rumors surrounding him, such as that he suddenly appeared in Avrovia during a night devoid of stars, but none of these have any foundation and he presently ignores them rather than providing answers. He works with and answers only to those of a higher station than him.`,

    playersNotes: `Player's notes`,
    art: ilvaaj,
    artist: "https://twitter.com/karawek__",
    artistName: "Karawek",
    timer: `${(num += 0.2)}s`,
  },
  {
    name: "Anya",
    class: "Rogue",
    race: "Elf",
    alignment: "Chaotic Good",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur laudantium cumque minima aspernatur ullam corrupti
    vel, perspiciatis eius, debitis necessitatibus, expedita
    deleniti architecto sequi tempore excepturi dolore quaerat
    assumenda harum eveniet est dolorem illum. Minus dolorem
    aperiam assumenda cum beatae?`,
    playersNotes: `Player's notes`,
    art: anya,
    artist: false,
    artistName: false,
    timer: `${(num += 0.2)}s`,
  },
];
