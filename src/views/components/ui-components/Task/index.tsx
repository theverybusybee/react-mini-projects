import styles from './index.module.scss';
import { Checkbox } from 'views/components/ui-components/Checkbox';
import Trash from 'assets/images/icons/animated/trash.json';
import Settings from 'assets/images/icons/animated/settings.json';
import { AnimatedIcon } from '../AnimatedIcon';
import { TaskProps } from './types';
import { TasksStatus } from 'views/components/pages/ToDoList/types';

export const Task: React.FC<TaskProps> = ({
  title,
  status,
  handleEdit,
  handleDelete,
  handleCheckbox,
  checkboxState,
}) => {
  const taskStyles = `${styles.task} ${checkboxState === TasksStatus.Fulfilled ? styles.task_fulfilled : ''}`;

  return (
    <article className={taskStyles}>
      <Checkbox
        setIsChecked={handleCheckbox}
        isChecked={checkboxState === TasksStatus.Fulfilled ? true : false}
      />
      <p className={styles.taskTitle}>{title}</p>
      <div className={styles.buttonsContainer}>
        {status !== TasksStatus.Fulfilled && (
          <AnimatedIcon icon={Settings} onClick={handleEdit} />
        )}
        <AnimatedIcon icon={Trash} onClick={handleDelete} />
      </div>
    </article>
  );
};
