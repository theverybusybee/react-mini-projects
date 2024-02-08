import { SyntheticEvent } from 'react';
import styles from './index.module.scss';

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: (e: SyntheticEvent) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  setIsChecked,
  isChecked,
}) => {
  return (
    <label className={styles.label} onClick={setIsChecked}>
      <input type="checkbox" className={styles.taskInput} checked={isChecked} />
    </label>
  );
};
