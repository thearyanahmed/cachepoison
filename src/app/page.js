import styles from "./page.module.css";
import Nav from './nav';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home page!</h1>
        <p>Random: {Math.random()}</p>
        <p>Now: {new Date().toLocaleTimeString()}</p>
        <Nav />
      </main>
    </div>
  );
}
