import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { researchData } from "../../data/research";
import Footer from "../Footer/Footer";
import styles from "./ProjectDetail.module.scss";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project =
    projectsData.find((p) => p.id === id) ??
    researchData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className={styles.pageWrapper}>
        <div className={styles.container}>
          <h2>Project Not Found</h2>
          <p>The project you are looking for does not exist.</p>
          <Link to="/#projects" className={styles.backBtn}>
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "research" } });
  };

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Navigation Back Link */}
          <a
            href="/#research"
            onClick={handleBackToProjects}
            className={styles.backBtn}
          >
            ← Back to Home
          </a>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.metaRow}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.date}>{project.date}</span>
            </div>
            <h1>{project.title}</h1>
            <div className={styles.divider} />
          </header>

          {/* Quick Action Links */}
          <div className={styles.actionLinks}>
            {project.githubUrl || project.paperUrl ? (
              <>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    View Repository
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryLink}
                  >
                    Read Paper
                  </a>
                )}
              </>
            ) : (
              <span className={styles.noLinksText}>{project.noLinksText}</span>
            )}
          </div>

          {/* Main Body */}
          <div className={styles.content}>
            <div className={styles.block}>
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>

            {project.keyContributions && (
              <div className={styles.block}>
                <h3>Key Contributions & Highlights</h3>
                <ul className={styles.bulletList}>
                  {project.keyContributions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.block}>
              <h3>Technologies & Tools</h3>
              <div className={styles.tags}>
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}