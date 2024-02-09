import styles from './index.module.scss';
import { TransparentOverlay } from 'views/components/sections/TransparentOverlay';
import { Input } from '../../ui-components/Input';

export const ToDoList: React.FC = () => {
  return (
    <main>
      <TransparentOverlay>
        <ul className={styles.taskList}>
          <li className={styles.taskItem}>
            <Input title={'Added task'} />
          </li>
          <li className={styles.taskItem}>
            <Input title={'Added task'} />
          </li>
          <li className={styles.taskItem}>
            <Input title={'Added task'} />
          </li>
          <li className={styles.taskItem}>
            <Input title={'Added task'} />
          </li>
        </ul>
      </TransparentOverlay>
    </main>
  );
};
