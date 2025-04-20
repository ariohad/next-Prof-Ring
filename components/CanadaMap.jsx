import { useState } from 'react';
import styles from './CanadaMap.module.css';

const CanadaMap = () => {
  const [activeProvinces, setActiveProvinces] = useState(['ON']);

  const provinces = {
    'BC': { name: 'British Columbia', path: 'M 0,0 L 50,0 L 50,50 L 0,50 Z' },
    'AB': { name: 'Alberta', path: 'M 50,0 L 100,0 L 100,50 L 50,50 Z' },
    'SK': { name: 'Saskatchewan', path: 'M 100,0 L 150,0 L 150,50 L 100,50 Z' },
    'MB': { name: 'Manitoba', path: 'M 150,0 L 200,0 L 200,50 L 150,50 Z' },
    'ON': { name: 'Ontario', path: 'M 200,0 L 250,0 L 250,50 L 200,50 Z' },
    'QC': { name: 'Quebec', path: 'M 250,0 L 300,0 L 300,50 L 250,50 Z' },
    'NB': { name: 'New Brunswick', path: 'M 300,0 L 350,0 L 350,50 L 300,50 Z' },
    'NS': { name: 'Nova Scotia', path: 'M 350,0 L 400,0 L 400,50 L 350,50 Z' },
    'PE': { name: 'Prince Edward Island', path: 'M 400,0 L 450,0 L 450,50 L 400,50 Z' },
    'NL': { name: 'Newfoundland and Labrador', path: 'M 450,0 L 500,0 L 500,50 L 450,50 Z' }
  };

  return (
    <div className={styles.mapContainer}>
      <svg viewBox="0 0 500 50" className={styles.map}>
        {Object.entries(provinces).map(([code, province]) => (
          <path
            key={code}
            d={province.path}
            className={`${styles.province} ${activeProvinces.includes(code) ? styles.active : ''}`}
            title={province.name}
          />
        ))}
      </svg>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles.active}`}></div>
          <span>Professional Rings Available</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendColor}></div>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default CanadaMap; 