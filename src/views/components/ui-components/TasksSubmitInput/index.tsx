import styles from './index.module.scss';
import { TasksSubmitInputProps } from './types';

export const TasksSubmitInput: React.FC<TasksSubmitInputProps> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          placeholder="Type your task..."
          type="text"
          value={value}
          name="tasksSubmitInput"
          onChange={onChange}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        add task
      </button>
    </form>
  );
};
