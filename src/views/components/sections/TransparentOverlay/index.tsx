import styles from './index.module.scss';
import { TransparentOverlayProps } from './types';

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
