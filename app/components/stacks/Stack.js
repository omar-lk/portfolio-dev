import React from 'react';
import styles from './stack.module.css';

const Stack = () => {
  return (
    <div className={styles.stackContainer}>
      <h1 className={styles.sectionTitle}>My Tech Stack</h1>
      <div className={styles.stackRow}>
        <div className={styles.tooltip}>
          <img src="/stacks/html.png" alt="HTML" />
          <span className={styles.tooltiptext}>HTML</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/css.png" alt="CSS" />
          <span className={styles.tooltiptext}>CSS</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/javascript.png" alt="JavaScript" />
          <span className={styles.tooltiptext}>JavaScript</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/reactjs.png" alt="React" />
          <span className={styles.tooltiptext}>React</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/redux.png" alt="Redux" />
          <span className={styles.tooltiptext}>Redux</span>
        </div>
      </div>
      <div className={styles.stackRow}>
        <div className={styles.tooltip}>
          <img src="/stacks/laravel.png" alt="Laravel" />
          <span className={styles.tooltiptext}>Laravel</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/tailwind.png" alt="Tailwind" />
          <span className={styles.tooltiptext}>Tailwind</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/git.png" alt="Git" />
          <span className={styles.tooltiptext}>Git</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/github.png" alt="GitHub" />
          <span className={styles.tooltiptext}>GitHub</span>
        </div>
        <div className={styles.tooltip}>
          <img src="/stacks/vscode.png" alt="VS Code" />
          <span className={styles.tooltiptext}>VS Code</span>
        </div>
      </div>
    </div>
  );
}

export default Stack;
