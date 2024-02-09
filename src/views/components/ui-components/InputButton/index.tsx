import styles from './index.module.scss';
import { InputButtonProps } from './types';

export const InputButton: React.FC<InputButtonProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
