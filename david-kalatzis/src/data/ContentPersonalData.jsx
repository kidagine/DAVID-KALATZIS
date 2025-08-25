import darklings from "../assets/images/Darklings.png";
import darklings1 from "../assets/images/Darklings-1.png";
import fullbody from "../assets/images/Fullbody.jpeg";
import gummi from "../assets/images/Gummi.png";
import hero from "../assets/images/Hero.png";
import gameJam from "../assets/images/GameJam.png";
import openGL from "../assets/images/OpenGL.png";
import coma from "../assets/images/Coma.png";
import replicas from "../assets/images/Replicas.png";
import asteroids from "../assets/images/Asteroids.gif";
import zelda from "../assets/images/Zelda.gif";

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
    details: [
      {
        section: [
          {
            type: "_text",
            title: "Inverse Kinematics",
            body: "This project is a showcase of using IK(Inverse Kinematics) to adjust the model's skeleton dynamically to the environment.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/H6c8IgWu1oM?enablejsapi=1",
          },
        ],
      },
    ],
  },

  {
    image: gameJam,
    title: "Games made in 2 days",
    date: "Unity | C#",
    company: "Game-Jam Projects",
    url: "https://github.com/kidagine/Blite-GGJ2022/tree/349014b067f8418bf3b8c955863ab3718c899727",
    details: [
      {
        section: [
          {
            type: "_text",
            title: "Blite GGJ 2022",
            body: "Game made in 2 Days for Global Game Jam 2022, the theme was duality, so I decided on a mechanic where the player can switch between light and dark, affecting the environment around them.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/hoRQYLu4dvg?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
      {
        section: [
          {
            type: "_text",
            title: "Homeboy GGJ 2019",
            body: "The first Game Jam I participated in 2019, made in 2 days once again, the theme was home.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/NvQXEoYuBWs?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
    ],
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
    details: [
      {
        section: [
          {
            type: "_text",
            title: "The Game",
            body: "This is a more ambitious project working together with an artist to create a unique cozy adventure, though not a lot that can be shared yet!",
          },
        ],
      },
      {
        section: [
          {
            type: "_image",
            url: hero,
          },
        ],
      },
    ],
  },
  // {
  //   image:
  //     "https://i.pinimg.com/736x/30/22/66/302266806087fa7320f942c66004f2f9.jpg",
  //   title: "Boilerplate for Unity projects",
  //   date: "Unity | C#",
  //   company: "Chronos Boilerplate",
  // },
  {
    image: coma,
    title: "Small demos made on the side",
    date: "Unity | C#",
    company: "Small Demos",
    url: "https://github.com/kidagine/coma",
    details: [
      {
        section: [
          {
            type: "_text",
            title: "Coma",
            body: "Game made for a Uni competition which I ended up winning!",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/rSuhEc4ZNq8?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
      {
        section: [
          {
            type: "_text",
            title: "Specter",
            body: "Something made on the side for fun with the idea that the player is able to dash and stick from wall to wall, limiting movement in a specific way.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/4QI2ZQKT6qg?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
    ],
  },
  {
    image: openGL,
    title: "Tiny projects with pure C++",
    date: "C++ | SDL | OGL",
    company: "Open GL Projects",
    url: "https://github.com/kidagine/Pancake-OpenGL",
    details: [
      {
        section: [
          {
            type: "_text",
            title: "OpenGL Renderer",
            body: "Using pure C++ and OpenGL to render a simple pancake! this was a case study to understanding the fundamentals of what it takes to render triangles on a low level. I later developed it further to render a LEGO moving in 3D space. ",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/glkkQ1iNtQM?enablejsapi=1&version=3&playerapiid=ytplayer",
          },
        ],
      },
      {
        section: [
          {
            type: "_text",
            title: "Asteroids C++",
            body: "Made a simple Asteroids clone using pure C++ and SDL2, basically creating a very simplistic custom game engine in the process.",
          },
        ],
      },
      {
        section: [
          {
            type: "_image",
            url: asteroids,
          },
        ],
      },
    ],
  },

  {
    image: replicas,
    title: "Replicas of existing games",
    date: "Unity | C#",
    company: "Small Replicas",
    url: "https://github.com/kidagine/MarioRunReplica",
    details: [
      {
        section: [
          {
            type: "_text",
            title: "Zelda Replica",
            body: "Quick replica of the first Zelda game, recreating all the base main mechanics in an effort to learn from the classics.",
          },
        ],
      },
      {
        section: [
          {
            type: "_image",
            url: zelda,
          },
        ],
      },
      {
        section: [
          {
            type: "_text",
            title: "Mario Run Replica",
            body: "Quick replica of the first Mario Run, recreating a single full level in the game to see what it takes to make a game in that scope.",
          },
        ],
      },
      {
        section: [
          {
            type: "_video",
            url: "https://www.youtube.com/embed/hNPfZmyG-ew?enablejsapi=",
          },
        ],
      },
    ],
  },
];
