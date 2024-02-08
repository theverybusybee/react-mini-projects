import styles from './index.module.scss';

interface InputButtonProps {
  text: string;
}

export const InputButton: React.FC<InputButtonProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
