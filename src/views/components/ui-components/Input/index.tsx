import styles from './index.module.scss';
import { useState } from 'react';
import { Checkbox } from 'views/components/ui-components/Checkbox';
import Trash from 'assets/images/icons/animated/trash.json';
import { AnimatedIcon } from '../AnimatedIcon';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ title, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked((prevState) => !prevState);
  };

  const taskStyles = `${styles.task} ${isChecked ? styles.task_fulfilled : ''}`;

  return (
    <article className={taskStyles}>
      <Checkbox setIsChecked={handleCheckbox} isChecked={isChecked} />
      <p className={styles.taskTitle}>{title}</p>
      <div className={styles.buttonsContainer}>
        {/* <AnimatedIcon icon={Settings} /> */}
        <AnimatedIcon icon={Trash} onClick={handleDelete} />
      </div>
    </article>
  );
};
