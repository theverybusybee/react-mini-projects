import styles from './index.module.scss';
import { InputButton } from '../InputButton';
import { TasksChangeInputProps } from './types';

export const TasksChangeInput: React.FC<TasksChangeInputProps> = ({
  value,
  onChange,
  onSave,
  onSkip,
}) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type="text"
      />
      <div className={styles.buttonContainer}>
        <InputButton text="save" onClick={onSave} />
        <InputButton text="skip" onClick={onSkip} />
      </div>
    </label>
  );
};
