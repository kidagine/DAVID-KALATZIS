import darklings from "../assets/images/Darklings.png";
import darklings1 from "../assets/images/Darklings-1.png";
import fullbody from "../assets/images/Fullbody.jpeg";
import gummi from "../assets/images/Gummi.png";
import hero from "../assets/images/Hero.png";
import gameJam from "../assets/images/GameJam.png";
import openGL from "../assets/images/OpenGL.png";
import specter from "../assets/images/Specter.png";
import coma from "../assets/images/Coma.png";
import replicas from "../assets/images/Replicas.png";

export const personalData = [
  {
    image: darklings,
    title: "Custom netcode fighting game",
    date: "Unity | C#",
    company: "Darklings",
    url: "https://github.com/kidagine/Darklings-FightingGame",
    details: [
      {
        section: [
          {
            type: "_text",
            title: "P2P Rollback Netcode",
            body: "The biggest complexity in this project is the custom rollback netcode, which is a from the ground-up made netcode inspired by GGPO. The game connects 2 users through NAT hole punching, in order to maintain the highest level of accuracy the algorithm will predict what the user will do before the action is received to the host, so things are always flowing, in case this is not accurate we roll-back to the previous state.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/ouh34A0fY4k?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
      {
        section: [
          {
            type: "_text",
            title: "Results",
            body: "The repository ended up getting fair amount of attention, and I received multiple emails since of people asking to use the project for their PhD and more.",
          },
        ],
      },
      {
        section: [
          {
            type: "_image",
            url: darklings1,
          },
        ],
      },
    ],
  },
  {
    image: fullbody,
    title: "FPS IK controller",
    date: "Unity | C#",
    company: "Full-body awareness",
    url: "https://github.com/kidagine/FullBodyAwarenessFPS",
  },

  {
    image: gameJam,
    title: "Games made in 2 days",
    date: "Unity | C#",
    company: "Game-Jam Projects",
    url: "https://github.com/kidagine/Blite-GGJ2022/tree/349014b067f8418bf3b8c955863ab3718c899727",
  },
  {
    image: gummi,
    title: "Open platformer demo",
    date: "Unity | C#",
    company: "Gummi",
    url: "https://github.com/kidagine/Gummi",
  },
  {
    image: hero,
    title: "In development indie",
    date: "Unity | C#",
    company: "Project Hero",
  },
  {
    image: specter,
    title: "Small game prototype",
    date: "Unity | C#",
    company: "Specter",
    url: "https://github.com/kidagine/specter-unity",
  },

  // {
  //   image:
  //     "https://i.pinimg.com/736x/30/22/66/302266806087fa7320f942c66004f2f9.jpg",
  //   title: "Boilerplate for Unity projects",
  //   date: "Unity | C#",
  //   company: "Chronos Boilerplate",
  // },
  {
    image: openGL,
    title: "Tiny projects with pure C++",
    date: "C++ | SDL | OGL",
    company: "Open GL Projects",
    url: "https://github.com/kidagine/Pancake-OpenGL",
  },
  {
    image: coma,
    title: "Winner project in Uni",
    date: "Unity | C#",
    company: "Coma",
    url: "https://github.com/kidagine/coma",
  },
  {
    image: replicas,
    title: "Replicas of existing games",
    date: "Unity | C#",
    company: "Small Replicas",
    url: "https://github.com/kidagine/MarioRunReplica",
  },
];
