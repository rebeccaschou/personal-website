import website from "../../assets/projects/personal-website-image.png";
import tangsoodo from "../../assets/projects/martial-arts-app-image.png";

const majorProjects = [
  {
    color: [139, 182, 189],
    id: "martial-arts-app",
    title: "Martial Arts App",
    tags: ["Mobile iOS", "Swift"],
    role: "Mobile App Developer (iOS)",
    timeline: "Feb - May 2022 (16 wks)",
    tools: ["XCode", "Swift", "Core Data"],
    description:
      "Designed and programmed mobile app in Swift to standardize syllabus and track martial arts practices, tournament information, and class attendance.",
    descriptionExtended: [
      "Created as a centralized source of information for the World Tang Soo Do Organization, the Tang Soo Do App provides a standardized syllabus, rank requirements, and journal feature for Tang Soo Do students. Each user’s account is personalized, only displaying the syllabus requirements specific to their rank, and logged practice sessions, classes, competitions, and tests appear in their personal martial arts journal with customizable notes.",
      "Through this project, I learned to incorporate the Core Data framework to allow for data persistence of syllabus information, as well as Apple’s UserDefaults functionality to store individual user information. In addition, I had the opportunity to collaborate with Tang Soo Do studio owners to establish which features and layouts would be most beneficial. Tang Soo!",
    ],
    image: tangsoodo,
    alt: "project 2",
  },
  {
    color: [255, 182, 193],
    id: "personal-website",
    title: "Personal Website",
    tags: ["React", "UI/UX", "HTML", "CSS"],
    role: "Web Developer",
    timeline: "Jun - Aug 2023 (14 wks)",
    tools: ["React", "Django", "FIGMA"],
    description:
      "Designed a personal website (that you're looking at right now!) to show personal projects, publications, and for-fun crafts! Indepdendently learned React and related tools, such as ReactRouter.",
    descriptionExtended: ["Extended description coming soon!"],
    image: website,
    alt: "project 1",
  },
];

export default majorProjects;
