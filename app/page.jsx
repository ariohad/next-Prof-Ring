import CanadaMap from './components/CanadaMap';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Professional Rings</h1>
            <p className={styles.description}>
                Uniting surveyors across the nation
            </p>
            <CanadaMap />
        </main>
    );
}
