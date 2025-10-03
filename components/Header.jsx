import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Profile</h1>
      <p className={styles.subtitle}>Alexis Gente Heruela</p> 
    </header>
  );
}
