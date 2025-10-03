import React from 'react';
import styles from './ProfileCard.module.css';

export default function ProfileCard({
  name = 'Your Name',
  age = 20,
  bio = 'Short description about you.',
  image = '/profile.jpg'
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${name} profile`} className={styles.avatar} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.age}>Age: {age}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
