import { ReactNode } from 'react';
import styles from './index.module.scss';

interface TransparentOverlayProps {
  children: ReactNode;
}

export const TransparentOverlay: React.FC<TransparentOverlayProps> = ({
  children,
}) => {
  return (
    <article className={styles.overlay}>
      <span className={styles.overlayDot}></span>
      <span className={styles.overlayDot}></span>
      <span className={styles.overlayDot}></span>
      <span className={styles.overlayDot}></span>
      {children}
    </article>
  );
};
