import styles from './index.module.scss';
import { useState } from 'react';
import { Checkbox } from 'views/components/ui-components/Checkbox';
import Trash from 'assets/images/icons/animated/trash.json';
import { AnimatedIcon } from '../AnimatedIcon';
import { InputProps } from './types';
import { TasksStatus } from 'views/components/pages/ToDoList/types';

export const Input: React.FC<InputProps> = ({
  title,
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
        {/* <AnimatedIcon icon={Settings} /> */}
        <AnimatedIcon icon={Trash} onClick={handleDelete} />
      </div>
    </article>
  );
};
