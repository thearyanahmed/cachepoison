import Nav from "../nav";
import styles from "../page.module.css";

export default function Page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>World page!</h1>
                <p>Random: {Math.random()}</p>
                <p>Now: {new Date().toLocaleTimeString()}</p>
                <Nav />
            </main>
        </div>
    )
}