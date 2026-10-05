import React, { useLayoutEffect } from "react";
import styles from "./CV.module.scss";
import Footer from "../Footer/Footer";

export default function CV() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const appRoot = document.getElementById("root");
    if (appRoot) appRoot.scrollTop = 0;
  }, []);

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Curriculum Vitae</h2>
            <a href="/Rebecca-Chou-Curriculum-Vitae.pdf" download className={styles.downloadBtn}>
              Download CV
            </a>
          </div>
          <div className={styles.divider} />

          <div className={styles.cvContent}>
            {/* Education */}
            <div className={styles.cvGroup}>
              <h3>Education</h3>
              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Brown University</h4>
                  <span className={styles.date}>Aug 2022 – May 2026</span>
                </div>
                <p className={styles.subtext}>Sc.B. Computer Science & A.B. Literary Arts, Departmental Honors (GPA: 4.00/4.00)</p>
                <p className={styles.details}>
                  <strong>Relevant Coursework:</strong> Software Security Exploitation, Topics in Software Security, Applied Cryptography, Computer Networks, Introduction to Computer Systems Security, Introduction to Computer Systems.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>The Lawrenceville School</h4>
                  <span className={styles.date}>Aug 2018 – May 2022</span>
                </div>
                <p className={styles.subtext}>High School Diploma, Valedictorian (GPA: 4.13/4.30)</p>
              </div>
            </div>

            {/* Research Experience */}
            <div className={styles.cvGroup}>
              <h3>Research Experience</h3>
              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>DirtyRand — Secure Systems Lab | Brown University</h4>
                  <span className={styles.date}>2025 – Present</span>
                </div>
                <p className={styles.subtext}>Kernel Exploitation</p>
                <ul className={styles.bulletList}>
                  <li>Investigated vulnerabilities in Linux's RNG state, demonstrating how a restricted memory write makes downstream randomness predictable and enables attacks against ASLR, stack canaries, networking, and TLS.</li>
                  <li>Proposed a hardware-assisted defense using Intel MPK and ARM MTE to protect RNG state with minimal overhead.</li>
                  <li>Submitted to USENIX Security 2027 (Under Review).</li>
                </ul>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Chirp — Human-Computer Interaction Lab | Brown University</h4>
                  <span className={styles.date}>2023 – Present</span>
                </div>
                <p className={styles.subtext}>Communication Systems</p>
                <ul className={styles.bulletList}>
                  <li>Investigated emoji-only communication as an extreme case of low-text interaction through two complementary studies.</li>
                  <li>Examined how users interpret and construct meaning from emoji-only messages.</li>
                  <li>Analyzed longitudinal data to examine how users sustain communication in a severely constrained setting.</li>
                  <li>Submitted to ACM CHI 2027 (Under Review).</li>
                </ul>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>BeeBox — Secure Systems Lab | Brown University</h4>
                  <span className={styles.date}>2024 – 2025</span>
                </div>
                <p className={styles.subtext}>Kernel Protection</p>
                <ul className={styles.bulletList}>
                  <li>Evaluated BeeBox against the Linux BPF kselftest suite, identifying incompatibilities across data structures, helper functions, and execution paths.</li>
                  <li>Extended BeeBox to support additional BPF functionality, establishing engineering and performance tradeoffs for hardening BPF.</li>
                </ul>
              </div>
            </div>

            {/* Publications & Posters */}
            <div className={styles.cvGroup}>
              <h3>Publications & Posters</h3>
              <div className={styles.pubBlock}>
                <h5>Conference Papers</h5>
                <ul className={styles.bulletList}>
                  <li>
                    <strong>Rebecca Chou</strong>, Audrey Chou, Jeff Huang, Ji Won Chung, and Talie Massachi. "User Interpretations of Meaning in Low-Text, Emoji-Only Online Communication." <em>Submitted to ACM Conference on Human Factors in Computing Systems (CHI), 2027.</em> Under Review.
                  </li>
                  <li>
                    Alexander J. Gaidis, <strong>Rebecca Chou</strong>, Georgios Kokolakis, and Vasileios P. Kemerlis. "DirtyRand: Data-Only Attacks Against the Linux Kernel RNG." <em>Submitted to USENIX Security Symposium (SEC), 2027.</em> Under Review.
                  </li>
                </ul>
              </div>

              <div className={styles.pubBlock}>
                <h5>Posters</h5>
                <ul className={styles.bulletList}>
                  <li>
                    <strong>Rebecca Chou</strong>. "Unseed: Exploiting the Linux Workqueue to Break RNG Reseeding." Presented in partial fulfillment of the requirements for Honors in the Department of Computer Science at Brown University, April 2026.
                  </li>
                  <li>
                    <strong>Rebecca Chou</strong>, Anjali Upadhyaya, Danial Ahmad, Abhiraj Saxena, and Vakhtang Tchantchaleishvili. "Computational Sentiment Analysis of 2000–2020 AATS and STS Presidential Addresses." November 2021.
                  </li>
                </ul>
              </div>
            </div>

            {/* Work Experience */}
            <div className={styles.cvGroup}>
              <h3>Work Experience</h3>
              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Fidelity Investments (Boston, MA)</h4>
                  <span className={styles.date}>Aug 2026 – Present</span>
                </div>
                <p className={styles.subtext}>Associate Software Engineer (Advisor: Cassandra Costello)</p>
                <p className={styles.details}>
                  Design and deploy an enterprise trading platform to service real-time trade activity.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Fidelity Investments (Boston, MA)</h4>
                  <span className={styles.date}>Jun 2025 – Aug 2025</span>
                </div>
                <p className={styles.subtext}>Mobile Engineering Intern (Advisor: Manik Lamba)</p>
                <p className={styles.details}>
                  Built the Trader+ saved orders experience, enabling active traders to save and manage orders in Fidelity's flagship mobile app.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Fidelity Investments (Boston, MA)</h4>
                  <span className={styles.date}>Jun 2024 – Aug 2024</span>
                </div>
                <p className={styles.subtext}>Mobile Engineering Intern (Advisor: Matthew Berman)</p>
                <p className={styles.details}>
                  Designed tooltip components and tutorial flows for feature discovery, and migrated legacy API layers in the flagship mobile app.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>Jefferson Health (Philadelphia, PA)</h4>
                  <span className={styles.date}>Jun 2021 – Nov 2021</span>
                </div>
                <p className={styles.subtext}>Research Intern (Advisor: Vakhtang Tchantchaleishvili)</p>
                <p className={styles.details}>
                  Performed machine learning sentiment analysis on two decades of American Association for Thoracic Surgery (AATS) and Society of Thoracic Surgeons (STS) presidential speeches.
                </p>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className={styles.cvGroup}>
              <h3>Teaching Experience</h3>
              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>CSCI 0200: Data Structures & Algorithms (Brown University)</h4>
                  <span className={styles.date}>Fall 2024</span>
                </div>
                <p className={styles.subtext}>Head Teaching Assistant</p>
                <p className={styles.details}>
                  Led a 10-person teaching team to design homework and projects on data structures and algorithms emphasizing real-world applications.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>CSCI 0200: Data Structures & Algorithms (Brown University)</h4>
                  <span className={styles.date}>Fall 2023, Spring 2024</span>
                </div>
                <p className={styles.subtext}>Teaching Assistant</p>
                <p className={styles.details}>
                  Collaborated with a 60+ person teaching team to teach 200+ students data structures and algorithms.
                </p>
              </div>

              <div className={styles.cvItem}>
                <div className={styles.cvItemHeader}>
                  <h4>MATH 0520: Linear Algebra (Brown University)</h4>
                  <span className={styles.date}>Spring 2023</span>
                </div>
                <p className={styles.subtext}>Teaching Assistant</p>
                <p className={styles.details}>
                  Led biweekly lectures and individual office hours to teach a 48-student section.
                </p>
              </div>
            </div>

            {/* Service */}
            <div className={styles.cvGroup}>
              <h3>Service</h3>
              <div className={styles.serviceList}>
                <div className={styles.serviceRow}>
                  <span className={styles.position}>Technology Chair</span>
                  <span className={styles.organization}>Brown University Women in Computer Science (WiCS)</span>
                  <span className={styles.date}>2024 – 2025</span>
                </div>
                <div className={styles.serviceRow}>
                  <span className={styles.position}>Mentorship Chair</span>
                  <span className={styles.organization}>Brown University Women in Computer Science (WiCS)</span>
                  <span className={styles.date}>2023 – 2024</span>
                </div>
                <div className={styles.serviceRow}>
                  <span className={styles.position}>Fundraising Volunteer</span>
                  <span className={styles.organization}>The Tomorrow Fund</span>
                  <span className={styles.date}>2023 – 2026</span>
                </div>
                <div className={styles.serviceRow}>
                  <span className={styles.position}>Mobile App Developer</span>
                  <span className={styles.organization}>Roc Solid Foundation</span>
                  <span className={styles.date}>2023 – 2024</span>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className={styles.cvGroup}>
              <h3>Honors & Awards</h3>
              <div className={styles.awardsList}>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Sigma Xi Nominated Member</span>
                  <span className={styles.institution}>Brown University</span>
                  <span className={styles.date}>2026</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Senior Prize in Computer Science</span>
                  <span className={styles.institution}>Brown University</span>
                  <span className={styles.date}>2026</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Departmental Honors in Computer Science</span>
                  <span className={styles.institution}>Brown University</span>
                  <span className={styles.date}>2026</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Undergraduate Teaching & Research Award</span>
                  <span className={styles.institution}>Brown University</span>
                  <span className={styles.date}>2025</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Valedictorian</span>
                  <span className={styles.institution}>The Lawrenceville School</span>
                  <span className={styles.date}>2022</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardTitle}>Cum Laude Society</span>
                  <span className={styles.institution}>The Lawrenceville School</span>
                  <span className={styles.date}>2022</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}