import React from "react";
import styles from "./QuickBili.module.scss";

export default function QuickBili() {
  return (
    <div className={styles.quickbili} id="quickbili">
      <h1 className={styles.header}>About QuickBili</h1>
      <p className={styles.description}>
        QuickBili is a calculator and clinical decision support (programmed in
        Dart using the Flutter framework) based on Clinical Practice Guideline
        Revision: Management of Hyperbilirubinemia in the Newborn Infant 25 or
        More Weeks of Gestation. Pediatrics 2022; 150(3):e2022058859.
        <a
          href="https://doi.org/10.1542/peds.2022-058859"
          rel="noreferrer"
          target="_blank"
          className={styles.links}
        >
          [Full Text]
        </a>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/35927462/"
          rel="noreferrer"
          target="_blank"
        >
          [PubMed]
        </a>
      </p>
      <h1 className={styles.header}>Disclaimers</h1>
      <p className={styles.description}>
        The User acknowledges and agrees that these tools will be used only as a
        reference aid, and that the information contained in the products are
        not intended to be (nor should it be used as) a substitute for the
        exercise of professional judgement.
      </p>
      <p className={styles.description}>
        In view of the possibility of human error or changes in medical science,
        the User should confirm the information in the products through
        independent sources. The products are provided without warranties of any
        kind, express or implied, and the author disclaim any liability, loss,
        or damage caused by it or its content.
      </p>
      <p className={styles.description}>
        By continuing to use these products, you have indicated your acceptance
        of these terms.
      </p>
      <h1 className={styles.header}>Privacy Policy</h1>
      <p className={styles.description}>
        We will not save or analyze any data entered into the inputs for our
        medical calculator.
      </p>
    </div>
  );
}
