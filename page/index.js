// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Profile page using components" />
      </Head>

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <ProfileCard
            name="Alexis Heruela"                 
            age={21}
            bio="A front-end student learning Next.js and React."
            image="https://picsum.photos/200" 
          />

          <SkillsList skills={['JavaScript', 'React', 'Next.js']} />
        </main>

        <Footer />
      </div>
    </>
  );
}
