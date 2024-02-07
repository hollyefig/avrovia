import anya from "./assets/images/imgAnya.jpg";
import mathilda from "./assets/images/imgMathilda.jpg";

import cardRogue from "./assets/images/cardRogue.png";
import cardWarlock from "./assets/images/cardWarlock.png";
import cardWizard from "./assets/images/cardWizard.png";
import cardRanger from "./assets/images/cardRanger.png";
import cardCleric from "./assets/images/cardCleric.png";
import cardPaladin from "./assets/images/cardPaladin.png";

export const data = {
  socials: ["discord", "twitch", "youtube"],
  cast: [
    {
      name: "Anya",
      class: "Rogue",
      race: "Elf",
      alignment: "Chaotic Good",
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium cumque minima aspernatur ullam corruptivel, perspiciatis eius, debitis necessitatibus, expedita deleniti architecto sequi tempore excepturi dolore quaerat assumenda harum eveniet est dolorem illum. Minus dolorem aperiam assumenda cum beatae?`,
      playersNotes: `I really enjoy playing this character. She doesn't take life too seriously and won't mind a little mischief, but still cares deeply about her friends, and will use her talents to help them`,
      art: anya,
      card: cardRogue,
    },
    {
      name: "Myth",
      class: "Sorcerer/Warlock",
      race: "Sea Elf",
      alignment: "Chaotic Neutral",
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur laudantium cumque minima aspernatur ullam corruptivel, perspiciatis eius, debitis necessitatibus, expedita deleniti architecto sequi tempore excepturi dolore quaerat assumenda harum eveniet est dolorem illum. Minus dolorem aperiam assumenda cum beatae?`,
      playersNotes: `Player's notes`,
      art: anya,
      card: cardWarlock,
    },
    {
      name: "Ashar",
      class: "Wizard (Chronurgy)",
      race: "Fire Genasi",
      alignment: "Neutral/Chaotic Good",
      about: `Ash is a total sweetheart and will probably act as the mom of the party. She cares about everything and everyone and if someone she cares about gets hurt she will absolutely fireball someone into next week.
      That said, she's a chaotic good wizard with a heart of gold and a bag full of necessities (like chocolate for example)! Loves books, reading, teaching and sweets~!`,
      playersNotes: `Player's notes`,
      art: anya,
      card: cardWizard,
    },
    {
      name: "Ilvaaj",
      class: "Ranger (Horizon Walker)",
      race: "Shifter (Swiftstrider)",
      alignment: "Lawful Good",
      about: `Ilvaaj is a renown scholar and has a keen interest in technology, relics and mythology. There are a wide variety of rumors surrounding him, such as that he suddenly appeared in Avrovia during a night devoid of stars, but none of these have any foundation and he presently ignores them rather than providing answers. He works with and answers only to those of a higher station than him.`,
      playersNotes: `Player's notes`,
      art: anya,
      card: cardRanger,
    },
    {
      name: "Mathilda Blairwood",
      class: "Twilight Domain Cleric",
      race: "Aasimar",
      alignment: "Lawful Good",
      about: `She's a ditsy girl and often has her head in the clouds but she has a heart of gold and tries to be her best self. Mathilda enjoys sleeping a lot and often sleeps with her dream journal under her pillow.`,
      playersNotes: `Players notes`,
      art: mathilda,
      card: cardCleric,
    },
    {
      name: "Flavian",
      class: "Paladin",
      race: "Unicorn",
      alignment: "Lawful Good",
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequatur laudantium cumque minima aspernatur ullam corrupti
      vel, perspiciatis eius, debitis necessitatibus, expedita
      deleniti architecto sequi tempore excepturi dolore quaerat
      assumenda harum eveniet est dolorem illum. Minus dolorem
      aperiam assumenda cum beatae?`,
      playersNotes: `Player's Notes.`,
      art: anya,
      card: cardPaladin,
    },
  ],
  sessions: [
    {
      name: "Manul got you tongue?",
      tabs: {
        summary:
          "The heroes are transfixed by the words written by a Winyaki. These words may be meaningless right now, but they will eventually lead them to their fate..\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Big Fish, Small Pond",
      tabs: {
        summary:
          "Have you heard that N2LB will perform on Fish Be Cruisin' the sightseeing cruise TOMORROW? Aaaah- I can not wait! I'm a HUGE 2Bler.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Fish out of Water",
      tabs: {
        summary:
          "Big old fish eyes, a mouth full of hundreds of razor sharp teeth and long, pointy ears. The ears may have been indication that they have some background as elves, but it could also just be coincidence. They have two arms which end in two pincer like protrusions and webbed feet which provide balance when on solid ground and assist in swimming. \n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Testing the Waters",
      tabs: {
        summary:
          "The manta rays swim right under your feet and wait for you to secure tightly onto them. You suddenly hear a familiar voice coming from within the waves. As you look closer through the heavy rain, you can see Nereus on a Manta Ray as well. He seems to be looking at you, his whole being drenched and exhausted from the rain. “Hold on tight!” he shouts through the deafening sounds of the rain. As he holds onto the mantas rays and then disappears into the waters below.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Forgotten River",
      tabs: {
        summary:
          "Befoul Water - 5th level Necromancy Spell.\n\n" +
          "Any creature that consumes the water, breathes it, or spends more than 1 minute in it must begin to make a Constitution saving throw every minute. If the creature succeeds on two of these saves, it automatically saves against this effect for the next 24 hours. If the creature fails two of these saves, it is afflicted by a disease that can last beyond the spell's duration. While diseased in this way, it is always poisoned, and it can't regain hit dice or reduce its exhaustion level by resting.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Unexplored Depths",
      tabs: {
        summary:
          "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Elemental Blessings",
      tabs: {
        summary:
          "Zaleil the Pure looks down upon the party, her gaze fixating on Ashar. Her expression is hard to read, you're not sure if she is signaling signs of surprise or signs of fear. Ashar? she finally says, breaking the silence in her elemental demi-plane. You have finally met your twin sister.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Aftershock",
      tabs: {
        summary:
          "I'm kind of worried about Miso... She went off, trying to find her pet Pumpkin Pie, but it has been over a day since we have seen her... I hope she's alright. She did say that Pumpkin Pie loves spicy things....",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Mouth-Watering Case",
      tabs: {
        summary:
          "Anya impostor sus? Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Danger Woods",
      tabs: {
        summary:
          "The Danger Woods are a dense forest located on the outskirts of Piri. Despite its name, the woods are known for their stunning beauty, with towering trees and vibrant foliage covering the landscape. However, the Danger Woods are also home to a variety of dangerous plants and animals, making it a treacherous place for travellers. The flowers in the Danger Woods are particularly notable, with many species growing to enormous sizes. Some of these flowers are poisonous or have other harmful properties, making them a potential hazard for those who wander too close. ",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Venusean Pool",
      tabs: {
        summary:
          "The nymph statueof the Venusean Pool is a sight to behold. Carved from the finest marble and adorned with intricate details that make it look like the statue has come to life. The statue depicts a beautiful nymph with flowing hair and an expression of serenity on her face. The statue exudes an aura of divinity and is said to be a representation of the nymphs who guard the pool. The statue is placed in such a way that it looks as if it is watching over the pool and its visitors, providing a sense of safety and protection.\n\n" +
          "Only the pure of heart may reveal themselves, for the water reflects the soul.",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "Unleashed from the Depths",
      tabs: {
        summary:
          "Martin's Inn is a quaint tavern that has stood the test of the earthquake. Once known as Marlin's Inn, a small typo on the sign caused the name to change forever. However, this hasn't stopped the locals from frequenting the establishment. The smell of freshly cooked fish and salt water wafts through the air, and as the dawn breaks, the front door is cast in a green-pink glow, making the sign that reads Fish be Kick stand out. It's a welcoming spot for travelers and locals alike, with its friendly atmosphere, hearty food, and your friends sitting in the midst of it.",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "entranced escape",
      tabs: {
        summary:
          "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "sea of sensations",
      tabs: {
        summary:
          "Fish be friend! Have you heard? This year's Gala is supposed to be super fun, with lots of new stalls, challenges and even... celebrities? I can't wait! We are still going to Gala Sardinia together, right?\n\n" +
          "With swords drawn, spells slung and hearts racing, the adventurers put up a fierce battle against Namari. In the end, they succeeded and captured her spirit within the spirit vessel. Her energy pulsates with an eerie green and blue light. The same hues that ripple across the treacherous Anolyte Ocean, which the party knows all too well. But now, as they bask in the afterglow of their triumph, they can't help but feel this newfound strength  coursing through their veins.",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "island inferno",
      tabs: {
        summary:
          "Subject: Urgent Report: Planar Overlapping at Rosewood Manor and Multiversal Impact\n\n" +
          "General Vonn Ursa,\n\n" +
          "I write to you as a dedicated member of the Legion of Seekers to bring forth a matter of utmost urgency and grave concern. Our recent investigations have unveiled a potentially catastrophic event taking place at Rosewood Manor—an unprecedented planar overlapping that poses a severe threat to the stability of the entire multiverse...",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "The Storm titan",
      tabs: {
        summary:
          "In the vast ocean of possibilities, be the fish that stands out. - Miss Sardinia .\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: null,
        gallery: "gallery",
      },
    },
    {
      name: "What awaits outside the gardens",
      tabs: {
        summary:
          "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
          "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
          "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
          "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
          "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
        video: "https://www.youtube.com/embed/w08HCsad1vw?si=YxGIJNWXxw6hpEJM",
        gallery: "gallery",
      },
    },
  ],
};
