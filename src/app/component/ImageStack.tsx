// /ImageStack.tsx
import Image from 'next/image';
import styles from './ImageStack.module.css'; // Import your module CSS

const ImageStack = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/Ads 1.png"
        alt="Image 1"
        width={100}
        height={100}
        className={styles.image}
      />
      <Image
        src="/Ads 2.png"
        alt="Image 2"
        width={100}
        height={100}
        className={styles.image}
      />
    </div>
  );
};

export default ImageStack;

