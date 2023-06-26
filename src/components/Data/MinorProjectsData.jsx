import peditools from "../../assets/projects/peditools-image.png";
import website from "../../assets/projects/personal-website-image.png";
import terminal from "../../assets/projects/terminal.png";

const minorProjects = [
  {
    // image: peditools,
    title: "Webscrape & Sentiment Analysis",
    tags: ["R", "Python", "Webscrape", "Sentiment Analysis"],
    description:
      "Programmed web scraping script using R to automatically extract, organize, and clean text data for 20 years of surgical society presidential speeches, from the AATS and the STS. Performed machine learning sentiment analysis in Python on 20 years of data.",
  },
  {
    image: website,
    title: "Shiny App",
    tags: ["R", "Shiny"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    image: terminal,
    title: "Connect4 AI Opponent",
    tags: ["ReasonML", "Minimax"],
    description:
      "Implemented Connect4, playable in the terminal against an AI opponent using the minimax algorithm. Worked with Nicholas Jankovic.",
  },
  {
    image: peditools,
    title: "Image Seamcarve Tool",
    tags: ["ReasonML", "Dynamic Programming"],
    description:
      "Resize images by removing the least important seam (adjacent pixels with the least color difference from their neighbors) using dynamic programming to improve efficiency.",
  },
];

export default minorProjects;
