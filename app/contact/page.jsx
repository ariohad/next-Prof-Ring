import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Get in touch with our team members directly:
      </p>
      
      <div className={styles.contactInfo}>
        <div className={styles.contactCard}>
          <h2>Gerard Smith, OLS</h2>
          <p><a href="mailto:gerardsmith79@gmail.com">gerardsmith79@gmail.com</a></p>
          <p><a href="tel:416-706-4621">416-706-4621</a></p>
        </div>

        <div className={styles.contactCard}>
          <h2>Ario Hadian, OLS (Ret)</h2>
          <p><a href="mailto:ario.hadian@gmail.com">ario.hadian@gmail.com</a></p>
          <p><a href="tel:830-499-3459">830-499-3459</a></p>
        </div>
      </div>
    </div>
  );
} 