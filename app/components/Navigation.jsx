'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/gallery" className={`${styles.navLink} ${pathname === '/gallery' ? styles.active : ''}`}>
          Gallery
        </Link>
        <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
} 