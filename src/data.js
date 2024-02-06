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
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Big Fish, Small Pond",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Fish out of Water",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Testing the Waters",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Forgotten River",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Unexplored Depths",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Elemental Blessings",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Aftershock",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Mouth-Watering Case",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Danger Woods",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Venusean Pool",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "Unleashed from the Depths",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "entranced escape",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "sea of sensations",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
    },
    {
      name: "island inferno",
      summary:
        "Lorem ipsum dolor sit amet consectetur. Id lectus tristique urna lectus. In ipsum egestas integer nunc fermentum vel leo.\n\n" +
        "In aliquam morbi vitae convallis. Ut rutrum nunc scelerisque maecenas in metus. Sed sed vel rhoncus sit. Diam arcu aliquam neque vel ipsum nisl dictumst nam.\n\n" +
        "Nisl ligula maecenas purus eros elit accumsan varius. Volutpat integer non purus sapien nisl Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus.\n\n" +
        "In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et interdum. Feugiat dui ut ornare sit venenatis elementum. Vel at commodo quis dignissim commodo nec tempus. Tortor cum ac elit pretium. In nec auctor pharetra et. Et morbi pulvinar faucibus facilisi. Eleifend pellentesque feugiat sit arcu. Molestie lacus iaculis neque nam euismod posuere tincidunt sit. Mi facilisis accumsan tristique quam.\n\n" +
        "Risus ultrices egestas lacus ut dictumst pharetra quam mollis. Scelerisque est at et nulla odio non aliquam faucibus. In rhoncus ut dis ultricies orci. Penatibus nam morbi feugiat orci nullam non feugiat leo tempor. Eu nulla neque porta viverra a sodales et",
      video: "video url",
      gallery: "gallery",
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
        video: "video url",
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
        video: "video url",
        gallery: "gallery",
      },
    },
  ],
};
