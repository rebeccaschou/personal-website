import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects";
import { researchData } from "../../data/research";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      {/* About Section */}
      <section className={styles.about} id="about">
        <div className={styles.container}>
          {/* Left Column: Text Content */}
          <div className={styles.left}>
            <h2>Rebecca Chou</h2>
            <code className={styles.emailCode}>
              echo @gmail.com | sed 's/^/rstchou/'
            </code>
            <div className={styles.divider} />

            <div className={styles.paragraphs}>
              <p>
                Hi! I’m Rebecca Chou, a software engineer and computer scientist interested in building systems that are secure, reliable, and worthy of the trust we place in them.
              </p>
              <p>
                I graduated from Brown University in 2026 with degrees in Computer Science and Literary Arts. As an undergraduate, I conducted research across human-computer interaction and systems security, working with{" "}
                <a href="https://jeffhuang.com/" target="_blank" rel="noopener noreferrer">
                  Professor Jeff Huang
                </a>{" "}
                in Brown’s{" "}
                <a href="https://hci.cs.brown.edu/" target="_blank" rel="noopener noreferrer">
                  Human-Computer Interaction Lab
                </a>{" "}
                and{" "}
                <a href="https://cs.brown.edu/people/vpk/" target="_blank" rel="noopener noreferrer">
                  Professor Vasileios Kemerlis
                </a>{" "}
                in the{" "}
                <a href="https://gitlab.com/brown-ssl" target="_blank" rel="noopener noreferrer">
                  Secure Systems Lab
                </a>
                . My research interests have since converged on operating systems and systems security, particularly the ways that low-level systems establish, preserve, and recover security guarantees.
              </p>
              <p>
                I’m currently an Associate Software Engineer at Fidelity Investments, where I work on enterprise trading systems. Outside of computing, I’m usually practicing Taekwondo, writing, or crocheting tiny birds—and occasionally turning a perfectly normal problem into an excuse to build an app.
              </p>
            </div>
          </div>

          {/* Right Column: Image & Stacked Links */}
          <div className={styles.right}>
            <div className={styles.profileImage} role="img" aria-label="Profile photo" />

            <div className={styles.socialButtons}>
              <a
                href="https://github.com/rebeccaschou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={styles.iconButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/rebeccaschou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={styles.iconButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="mailto:rstchou@gmail.com"
                aria-label="Send Email"
                className={styles.iconButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="/Rebecca-Chou-Curriculum-Vitae.pdf"
                download="Rebecca-Chou-Curriculum-Vitae.pdf"
                aria-label="Download CV"
                className={styles.iconButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className={styles.section} id="research">
        <div className={styles.container}>
          <h2>Research</h2>
          <div className={styles.divider} />

          <div className={styles.projectList}>
            {researchData.map((project) => (
              <Link
                key={project.id}
                to={`/research/${project.id}`}
                className={styles.projectRowLink}
              >
                <article className={styles.projectRow}>
                  <div className={styles.rowHeader}>
                    <h3>{project.title}</h3>
                    <span className={styles.typeTag}>{project.category}</span>
                  </div>
                  <p className={styles.description}>{project.summary}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <div className={styles.container}>
          <h2>Projects</h2>
          <div className={styles.divider} />

          <div className={styles.projectList}>
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className={styles.projectRowLink}
              >
                <article className={styles.projectRow}>
                  <div className={styles.rowHeader}>
                    <h3>{project.title}</h3>
                    <span className={styles.typeTag}>{project.category}</span>
                  </div>
                  <p className={styles.description}>{project.summary}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}