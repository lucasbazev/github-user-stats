import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ userData, reposData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your GitHub Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your GitHub User Stats
        </h1>

        <p className={styles.description}>
          User:{' '} 
          <a href={userData.html_url}> {userData.login} ({userData.name}) </a> |
          Followers: {userData.followers} |
          Repositories: {userData.public_repos}
        </p>

        {reposData.map(repo => (
          <div className={styles.grid}>
            <div className={styles.card} id={repo.id}>
              <h3>{repo.name.toUpperCase()}</h3>
              <p>Language: {repo.language}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/lucasbazev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Lucas Azevedo using npx create-next-app
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const request = await fetch('http://localhost:3000/api/getUserData');
  const { userData, reposData } = await request.json();

  console.log(userData, reposData);

  return {
    props: {
      userData,
      reposData
    }
  }
}