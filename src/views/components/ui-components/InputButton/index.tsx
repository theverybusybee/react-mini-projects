import styles from './index.module.scss';
import { InputButtonProps } from './types';

export const InputButton: React.FC<InputButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
