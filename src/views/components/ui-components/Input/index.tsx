import { useState } from 'react';
import { Checkbox } from 'views/components/ui-components/Checkbox';
import styles from './index.module.scss';
import Trash from 'assets/images/icons/animated/trash.json';
import Settings from 'assets/images/icons/animated/settings.json';
import { AnimatedIcon } from '../AnimatedIcon';

interface InputProps {
  title: string;
}

export const Input: React.FC<InputProps> = ({ title }) => {
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
        <AnimatedIcon icon={Settings} />
        <AnimatedIcon icon={Trash} />
      </div>
    </article>
  );
};
