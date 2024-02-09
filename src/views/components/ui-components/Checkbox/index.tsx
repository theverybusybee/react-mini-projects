import styles from './index.module.scss';

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: () => void;
}

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
