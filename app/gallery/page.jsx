'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

const images = [
  'e0a06944-d3ee-4652-80eb-d82b4ca0e365.jfif',
  '1c2e935e-3104-407a-ac04-1950a98568be.jfif',
  '9305dc0c-e5ff-43a1-95b3-75dee11893e7.jfif',
  '663d6cc9-4b10-4030-9f01-48babb916784.jfif',
  'f1d71a62-0806-4204-a1bb-03a2c2970257.jfif',
  'd47dae36-d7db-4fcc-9637-dc06c6c3152f.jfif',
  '1dd723e3-2aa4-4706-9fd1-a5df205c6ca3.jfif',
  '14c288fa-544d-4fa5-afcb-78a6e3993e3e.jfif',
  '1e1e5753-9086-4710-93c5-62b3f7e7cf7b.jfif',
  '07948a93-2261-4f84-858a-2a175ac13149.jfif',
  '439ce88d-a686-4132-8dca-a63efd341b20.jfif'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={styles.imageContainer}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={`/images/${image}`}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className={styles.image}
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent}>
            <Image
              src={`/images/${selectedImage}`}
              alt="Selected image"
              width={1200}
              height={1200}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  );
} 