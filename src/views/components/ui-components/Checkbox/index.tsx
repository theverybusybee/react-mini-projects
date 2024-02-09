import styles from './index.module.scss';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
  setIsChecked,
  isChecked,
}) => {
  return (
    <label className={styles.label} onClick={setIsChecked}>
      <input type="checkbox" className={styles.checkbox} checked={isChecked} />
      <div className={styles.customCheckbox}></div>
    </label>
  );
};
