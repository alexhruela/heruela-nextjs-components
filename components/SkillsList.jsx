import React from 'react';
import styles from './SkillsList.module.css';

export default function SkillsList({ skills = ['JavaScript', 'React', 'Next.js'] }) {
  return (
    <aside className={styles.skills}>
      <h3 className={styles.title}>Skills</h3>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </aside>
  );
}
