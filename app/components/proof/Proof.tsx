import React from 'react';
import styles from './proof.module.css';

const Proof = ({ points }: { points: string[] }) => {
  return (
    <div className={styles.proofContainer}>
      <div className={styles.proofRow}>
        {points.map((point) => (
          <span key={point} className={styles.proofItem}>
            {point}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Proof;
