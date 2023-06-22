import React from "react";
import styles from "./MinorProjects.module.scss";

import ProjectCard from "./ProjectCard/ProjectCard";
import img1 from "../../assets/projects/peditools-image.png";
import img2 from "../../assets/projects/personal-website-image.png";

const placeholderProjects = [
  {
    image: img1,
    title: "PediTools: Fenton 2013",
    tags: ["Swift", "XCode", "CoreData"],
    description:
      "Designed and published mobile app to provide neonatologists with growth projections and warnings about abnormal growth for newborns, based on the Fenton 2013 growth chart.",
  },
  {
    image: img2,
    title: "Placeholder Title 2",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    image: img2,
    title: "Placeholder Title 3",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function MinorProjects(props) {
  return (
    <div className={styles[`minor-projects`]} id="minor-projects">
      <h1 className={styles.intro}>
        A few snippets of other projects I've done!
      </h1>
      <div className={styles.gallery}>
        {placeholderProjects.map((project) => {
          return (
            <div key={project.title}>
              <ProjectCard
                className={styles.card}
                image={project.image}
                title={project.title}
                tags={project.tags}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
