import peditools from "../../assets/projects/peditools-image.png";
import website from "../../assets/projects/personal-website-image.png";

const majorProjects = [
  {
    color: [255, 182, 193],
    id: "project1",
    title: "Personal Website",
    tags: ["React", "UI/UX", "HTML", "CSS"],
    role: "Web Developer",
    timeline: "Jun - Aug 2023 (14 wks)",
    tools: ["React", "Django", "FIGMA"],
    description:
      "Designed a personal website (that you're looking at right now!) to show personal projects, publications, and for-fun crafts! Indepdendently learned React and related tools, such as ReactRouter.",
    descriptionExtended:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: website,
    alt: "project 1",
  },
  {
    color: [139, 182, 189],
    id: "project2",
    title: "PediTools: Fenton 2013",
    tags: ["Swift", "XCode"],
    role: "Mobile Developer",
    timeline: "Jun 2018 - Jul 2019 (54 wks)",
    tools: ["Swift", "XCode"],
    description:
      "Designed and published mobile app to provide neonatologists with growth projections and warnings about abnormal growth for newborns, based on the Fenton 2013 growth chart.",
    descriptionExtended:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: peditools,
    alt: "project 2",
  },
];

export default majorProjects;
