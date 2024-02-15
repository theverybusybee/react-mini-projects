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
    <article className={styles.article}>
      <label className={styles.label}>
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Type new task name"
        />
      </label>
      <div className={styles.buttonContainer}>
        <InputButton text="save" onClick={onSave} />
        <InputButton text="skip" onClick={onSkip} />
      </div>
    </article>
  );
};
