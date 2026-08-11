import React from 'react';
import styles from './proof.module.css';

const PROOF_POINTS = [
  '9+ years professional engineering',
  '$100K+ earned on Upwork',
  '7,790+ hours delivered',
  '20–30 month client engagements',
  '5 countries',
];

const Proof = () => {
  return (
    <div className={styles.proofContainer}>
      <div className={styles.proofRow}>
        {PROOF_POINTS.map((point) => (
          <span key={point} className={styles.proofItem}>
            {point}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Proof;
