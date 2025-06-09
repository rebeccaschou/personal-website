import website from "../../assets/projects/personal-website-image.png";
import tangsoodo from "../../assets/projects/martial-arts-app-image.png";
import chirp from "../../assets/projects/chirp.png";

const majorProjects = [
    {
    color: "rgba(69, 79, 173, 0.5)",
    id: "chirp",
    title: "Chirp",
    tags: ["Mobile", "Flutter", "Dart"],
    role: "Mobile App Developer",
    timeline: "",
    tools: ["XCode", "Swift", "Core Data"],
    description:
      "Built a sandbox social media platform to study the impact of user roles on experiences of social support",
    // descriptionExtended: [
    //   "Created as a centralized source of information for the World Tang Soo Do Organization, the Tang Soo Do App provides a standardized syllabus, rank requirements, and journal feature for Tang Soo Do students. Each user’s account is personalized, only displaying the syllabus requirements specific to their rank, and logged practice sessions, classes, competitions, and tests appear in their personal martial arts journal with customizable notes.",
    //   "Through this project, I learned to incorporate the Core Data framework to allow for data persistence of syllabus information, as well as Apple’s UserDefaults functionality to store individual user information. In addition, I had the opportunity to collaborate with Tang Soo Do studio owners to establish which features and layouts would be most beneficial. Tang Soo!",
    // ],
    image: chirp,
    alt: "chirp",
  },
  {
    color: "rgba(255, 182, 193, 0.5)",
    id: "personal-website",
    title: "Personal Website",
    tags: ["React", "UI/UX", "HTML", "CSS"],
    role: "Web Developer",
    timeline: "Jun - Aug 2023 (14 wks)",
    tools: ["React", "Django", "FIGMA"],
    description:
      "Designed and built a personal portfolio website (that you're browsing right now!)",
    // descriptionExtended: ["Extended description coming soon!"],
    image: website,
    alt: "personal website",
  },
    {
    color: "rgba(111, 40, 29, 0.5)",
    id: "martial-arts-app",
    title: "Martial Arts App",
    tags: ["Mobile iOS", "Swift"],
    role: "Mobile App Developer (iOS)",
    timeline: "Feb - May 2022 (16 wks)",
    tools: ["XCode", "Swift", "Core Data"],
    description:
      "Designed and built a mobile app to support training of World Tang Soo Do Association practicioners",
    // descriptionExtended: [
    //   "Created as a centralized source of information for the World Tang Soo Do Organization, the Tang Soo Do App provides a standardized syllabus, rank requirements, and journal feature for Tang Soo Do students. Each user’s account is personalized, only displaying the syllabus requirements specific to their rank, and logged practice sessions, classes, competitions, and tests appear in their personal martial arts journal with customizable notes.",
    //   "Through this project, I learned to incorporate the Core Data framework to allow for data persistence of syllabus information, as well as Apple’s UserDefaults functionality to store individual user information. In addition, I had the opportunity to collaborate with Tang Soo Do studio owners to establish which features and layouts would be most beneficial. Tang Soo!",
    // ],
    image: tangsoodo,
    alt: "martial arts app",
  },
];

export default majorProjects;
