import peditools from "../../assets/projects/peditools-image.png";
// import terminal from "../../assets/projects/terminal.png";

const minorProjects = [
  {
    image: peditools,
    title: "PediTools: Fenton 2013",
    tags: ["Mobile iOS", "Swift"],
    description:
      "Designed and published mobile app to provide neonatologists with growth projections and warnings about abnormal growth for newborns, based on the Fenton 2013 growth chart.",
  },
  {
    // image: peditools,
    title: "Webscrape & Sentiment Analysis",
    tags: ["R", "Python", "Webscrape", "Sentiment Analysis"],
    description:
      "Programmed web scraping script using R to automatically extract, organize, and clean text data for 20 years of surgical society presidential speeches, from the AATS and the STS. Performed machine learning sentiment analysis in Python on 20 years of data.",
  },
  {
    // image: peditools,
    title: "Connect4 AI Opponent",
    tags: ["Minimax", "ReasonML"],
    description:
      "Implemented Connect4, playable in the terminal against an AI opponent that uses a minimax algorithm to simulate intelligent decisions. Worked with Nicholas Jankovic.",
  },
  // {
  //   image: website,
  //   title: "Shiny App",
  //   tags: ["R", "Shiny"],
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // },
  {
    // image: terminal,
    title: "Interpreter (Racket in ReasonML)",
    tags: ["Interpreter", "Racket", "ReasonML"],
    description:
      "Interprets programs written in Racket by reading, parsing, and processing string representations of Racket programs, using ReasonML.",
  },
  {
    // image: peditools,
    title: "Seamcarve Image Resize Tool",
    tags: ["Dynamic Programming", "Python"],
    description:
      "Minimizes information loss in resized images by removing the least important seam (series of adjacent pixels with the least color difference from their neighbors). Uses dynamic programming to improve efficiency.",
  },
  {
    // image: peditools,
    title: "Search Engine",
    tags: ["Page Rank", "Python"],
    description:
      "Provides relevant material for a search based on term frequency, inverse document frequency, and page rank. Pre-computes ranking information for faster querying.",
  },
  {
    // image: peditools,
    title: "Travel Planner",
    tags: ["BFS", "Dijkstra", "Java"],
    description:
      "Optimizes routes within a travel graph by distance, time, or cost using breadth-first search and Dijkstra’s algorithm.",
  },
];

export default minorProjects;
