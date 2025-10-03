import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Profile</h1>
      <p className={styles.subtitle}>Your Name</p> {/* replace "Your Name" with your real name */}
    </header>
  );
}
