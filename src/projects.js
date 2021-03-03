import lumenLogo from "./img/lumen-logo.png";
import nodeLogo from "./img/node-logo.png";
import graphQLLogo from "./img/graphql-logo.png";
var projects = [
  {
    id: 6,
    title: "BoxLock Control",
    description:
      "Enterprise platform for managing access control in BoxLock's larger accounts.",
    liveURL: "https://www.getboxlock.com/solution#platform",
    tech: [
      {
        title: "React",
        img:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        title: "Node",
        img: nodeLogo,
      },
      {
        title: "Typescript",
        img: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
      },
      {
        title: "GraphQL",
        img: graphQLLogo,
      },
    ],
    iDid: [
      "Front end development using React, Typescript, CSS, and HTML",
      "API server using Node, Typescript, and GraphQL",
    ],
  },
  {
    id: 1,
    title: "Game Night",
    description:
      "An application for creating and managing game nights with friends. Enter an event code to view an event and RSVP, or log in to create and manage your own events.",
    vidURL: "https://carltonfreeman24.wistia.com/medias/4ab8ezqze3",
    gitHubURL: "https://github.com/carltonf25/game-night-api",
    liveURL: "https://game-night-v1.netlify.com",
    tech: [
      {
        title: "React",
        img:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        title: "Figma",
        img:
          "https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg",
      },
      {
        title: "Lumen",
        img: lumenLogo,
      },
    ],
    iDid: [
      "UI Design in Sketch",
      "Front end development using React, JavaScript, CSS, and HTML",
      "Back end logic in Node and Express",
      "Data management with MongoDB",
    ],
  },
  {
    id: 5,
    title: "Acquire (UI Prototype)",
    description:
      "This is a test UI for an app that tracks potential business acquisitions",
    vidURL: "https://acquire.netlify.com",
    techUsed: "React, HTML, CSS, Styled Components, Figma",
    gitHubURL: "https://github.com/carltonf25/acquire",
    liveURL: "https://acquire.netlify.com/",
    iDid: ["React UI", "Designed in Figma"],
    tech: [
      {
        title: "React",
        img:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        title: "Figma",
        img:
          "https://i7.pngguru.com/preview/92/808/966/figma-user-interface-design-designer-logo-apps-design.jpg",
      },
    ],
  },
];

export default projects;
