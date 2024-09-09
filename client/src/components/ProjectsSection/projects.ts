import btb from "../../assets/bookTheBest_1.png";
import mernchat from "../../assets/mern_chat.png";
import explorehub from "../../assets/explorehub.png";
import rythmic from "../../assets/rythmic_1.png";
import stu from "../../assets/stu.png";
import mechnovate from "../../assets/mechnovate.png";
import bashbaoss from "../../assets/BashBoss.jpeg";
import hackoverflow from "../../assets/h-o.png";
import battleship from "../../assets/battleship.png";
const projects = [
  {
    coverImg: mechnovate,
    title: "Mechnovate",
    technologies: ["React", "Typescript"],
    description:
      "Mechnovate was an initiative taken by students of ASME-VIT club, tp encourage innovation in the field of mechanical. Mechnovate's website enables participants to learn about the event, register for the event, and view the events schedule at Mechnovate 2024. ",
    shortDescription:
      "Mechnovate , a static website build for ASME-VIT club of VIT.",
    github: "https://www.mechnovate.in/",
  },
  {
    coverImg: hackoverflow,
    title: "HackOverflow",
    technologies: ["React", "Javascript"],
    description:
      "HackOverflow's website  for 3 day national level hackathon- HackOverflow organised by PHCET's Computer Engineering Department.",
    shortDescription:
      "HackOverflow, a static website build for PHCET's Computer Engineering Department. Participants can learn about the event, register for the event, and view the events schedule at HackOverflow 2024.",
    github: "https://hack-overflow-2.tech/",
  },
  {
    coverImg: bashbaoss,
    title: "BashBoss",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Typescript",
      "DUO",
      "2FA",
      "JWT",
      "OAuth",
      "Firebase",
    ],
    description:
      "With BashBoss, event organisers can create events, manage participants, and view analytics. Participants can view events, register for events, and view their event history. BashBoss is a unified platform for event organisers and event participants.",
    shortDescription:
      "BashBoss: Unified platform for event organisers and event participants.",
    github:
      "https://github.com/orgs/CSCI-P465-565-Project-Group-12/repositories",
  },
  {
    coverImg: battleship,
    title: "Battleship",
    technologies: ["React", "Typescript", "ASP.NET", "SignalR", "C#", "Redux"],
    description:
      "Battleship is a game where you have to sink all the ships of your opponent.",
    shortDescription:
      "Built with React, Typescript and ASP.NET Battleship is a game where you have to sink all the ships of your opponent.",
    github: "https://github.com/pushkar14-mst/Battleship",
  },
  {
    coverImg: btb,
    title: "Book The Best",
    technologies: ["React", "Node", "MongoDB", "Typescript", "Amadeus API"],
    description:
      "With Book The Best, you can book the best flights at the best prices. It compares flight prices from various airlines and provides you with the best options.",
    shortDescription:
      "Book The Best is a platform where you can book the best flights at the best prices.",
    github: "https://github.com/pushkar14-mst/BookTheBest",
  },
  {
    coverImg: mernchat,
    title: "MERN Chat",
    technologies: ["React", "Node", "MongoDB", "Socket.io"],
    description:
      "MERN Chat is a real-time chat application where users can create chat rooms, join chat rooms, and chat with other users in real-time.",
    shortDescription: "Chat App: A Real-Time Chat Application",
    github: "https://github.com/pushkar14-mst/MERN-Chat-App",
  },
  {
    coverImg: explorehub,
    title: "ExploreHub",
    technologies: ["React", "Node", "MongoDB"],
    description:
      "ExploreHub is a platform where you can explore tailored travel experiences. It provides you with the best travel options based on your preferences. Users can book travel experiences, and hotels at best prices. ExploreHub is also secured with 2FA powered by DUO.",
    shortDescription: "ExploreHub: Your Gateway to Tailored Travel Experiences",
    github: "https://github.com/pushkar14-mst/Travel-Guide-App",
  },
  {
    coverImg: rythmic,
    title: "Rythmic",
    technologies: ["React", "Node", "MongoDB", "Redux", "Spotify API"],
    description:
      "Embark on a musical journey with my creation: an immersive music  playback web application. Powered by the MERN stack and supercharged  with TypeScript, this project seamlessly integrates Spotify's API to bring you essential music functionalities.",
    shortDescription:
      "Rythmic is an immersive music playback web application powered by the MERN stack and TypeScript. Seamlessly integrating Spotify's API, it brings you essential music functionalities.",
    github: "https://github.com/pushkar14-mst/Rythmic",
  },
  {
    coverImg: stu,
    title: "StructureTheUnstructured",
    technologies: ["React", "Node", "Typescript", "Flask", "Machine Learning"],
    description:
      "Unlocking the potential hidden within unstructured data formats—audio, image files, and network logs—my data analysis tool stands as testament to structured insight generation. Leveraging the power of React and TypeScript on the client-side, this tool empowers users to effortlessly upload multiple unstructured files, transforming them into downloadable CSV formatted files.",
    shortDescription: "StructureTheUnstructured: A Data Analysis Tool",
    github: "https://github.com/pushkar14-mst/Structure-The-Unstructured",
  },
];

export default projects;
