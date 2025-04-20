'use client';

import styles from './CanadaMap.module.css';

const CanadaMap = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe 
        src="https://api.ultimaps.com/player/9287089e-2cb8-4cd0-b6ba-7800ceeece2c" 
        scrolling="no" 
        allowtransparency="true" 
        allowFullScreen={true}
        className={styles.map}
        title="Canada Map"
      />
    </div>
  );
};

export default CanadaMap; 